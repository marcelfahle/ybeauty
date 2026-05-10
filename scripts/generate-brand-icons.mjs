import { mkdirSync, writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";

const appDir = new URL("../src/app/", import.meta.url);
const teal = [18, 63, 69, 255];
const cream = [248, 245, 239, 255];
const copper = [210, 131, 95, 255];

function blendPixel(data, width, x, y, color, alpha = 1) {
  if (x < 0 || y < 0 || x >= width || y >= width || alpha <= 0) {
    return;
  }

  const offset = (y * width + x) * 4;
  const sourceAlpha = (color[3] / 255) * alpha;
  const targetAlpha = data[offset + 3] / 255;
  const outAlpha = sourceAlpha + targetAlpha * (1 - sourceAlpha);

  if (outAlpha === 0) {
    return;
  }

  data[offset] = Math.round(
    (color[0] * sourceAlpha + data[offset] * targetAlpha * (1 - sourceAlpha)) / outAlpha,
  );
  data[offset + 1] = Math.round(
    (color[1] * sourceAlpha + data[offset + 1] * targetAlpha * (1 - sourceAlpha)) / outAlpha,
  );
  data[offset + 2] = Math.round(
    (color[2] * sourceAlpha + data[offset + 2] * targetAlpha * (1 - sourceAlpha)) / outAlpha,
  );
  data[offset + 3] = Math.round(outAlpha * 255);
}

function insideRoundedRect(x, y, size, margin, radius) {
  const left = margin;
  const top = margin;
  const right = size - margin;
  const bottom = size - margin;
  const nearestX = Math.max(left + radius, Math.min(x, right - radius));
  const nearestY = Math.max(top + radius, Math.min(y, bottom - radius));
  const inCore = x >= left + radius && x <= right - radius && y >= top && y <= bottom;
  const inSide = x >= left && x <= right && y >= top + radius && y <= bottom - radius;
  const distance = Math.hypot(x - nearestX, y - nearestY);

  return inCore || inSide || distance <= radius;
}

function drawCircle(data, width, cx, cy, radius, color) {
  const minX = Math.floor(cx - radius - 1);
  const maxX = Math.ceil(cx + radius + 1);
  const minY = Math.floor(cy - radius - 1);
  const maxY = Math.ceil(cy + radius + 1);

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const distance = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
      const alpha = Math.max(0, Math.min(1, radius + 0.5 - distance));
      blendPixel(data, width, x, y, color, alpha);
    }
  }
}

function quadraticPoint(start, control, end, t) {
  const oneMinusT = 1 - t;

  return [
    oneMinusT * oneMinusT * start[0] + 2 * oneMinusT * t * control[0] + t * t * end[0],
    oneMinusT * oneMinusT * start[1] + 2 * oneMinusT * t * control[1] + t * t * end[1],
  ];
}

function drawQuadratic(data, width, scale, start, control, end, strokeWidth, color) {
  const steps = Math.max(40, width * 2);

  for (let index = 0; index <= steps; index += 1) {
    const t = index / steps;
    const [x, y] = quadraticPoint(start, control, end, t);
    drawCircle(data, width, x * scale, y * scale, strokeWidth * scale * 0.5, color);
  }
}

function renderIcon(size) {
  const scale = 4;
  const unit = (size / 64) * scale;
  const renderSize = size * scale;
  const data = new Uint8ClampedArray(renderSize * renderSize * 4);
  const margin = 3 * unit;
  const radius = 10 * unit;

  for (let y = 0; y < renderSize; y += 1) {
    for (let x = 0; x < renderSize; x += 1) {
      if (insideRoundedRect(x + 0.5, y + 0.5, renderSize, margin, radius)) {
        blendPixel(data, renderSize, x, y, teal);
      }
    }
  }

  drawQuadratic(data, renderSize, unit, [14, 17], [27, 34], [48, 15], 5.4, cream);
  drawQuadratic(data, renderSize, unit, [33, 23], [25, 39], [12, 52], 5.2, cream);
  drawQuadratic(data, renderSize, unit, [24, 42], [38, 39], [53, 40], 4.4, cream);
  drawCircle(data, renderSize, 49 * unit, 15 * unit, 2.2 * unit, copper);

  return downsample(data, renderSize, size);
}

function downsample(source, sourceSize, targetSize) {
  const factor = sourceSize / targetSize;
  const output = new Uint8Array(targetSize * targetSize * 4);

  for (let y = 0; y < targetSize; y += 1) {
    for (let x = 0; x < targetSize; x += 1) {
      let red = 0;
      let green = 0;
      let blue = 0;
      let alpha = 0;

      for (let sampleY = 0; sampleY < factor; sampleY += 1) {
        for (let sampleX = 0; sampleX < factor; sampleX += 1) {
          const sourceOffset = ((y * factor + sampleY) * sourceSize + x * factor + sampleX) * 4;
          red += source[sourceOffset];
          green += source[sourceOffset + 1];
          blue += source[sourceOffset + 2];
          alpha += source[sourceOffset + 3];
        }
      }

      const samples = factor * factor;
      const targetOffset = (y * targetSize + x) * 4;
      output[targetOffset] = Math.round(red / samples);
      output[targetOffset + 1] = Math.round(green / samples);
      output[targetOffset + 2] = Math.round(blue / samples);
      output[targetOffset + 3] = Math.round(alpha / samples);
    }
  }

  return output;
}

function makeIcoImage(size, rgba) {
  const headerSize = 40;
  const xorSize = size * size * 4;
  const maskRowSize = Math.ceil(size / 32) * 4;
  const maskSize = maskRowSize * size;
  const buffer = Buffer.alloc(headerSize + xorSize + maskSize);

  buffer.writeUInt32LE(headerSize, 0);
  buffer.writeInt32LE(size, 4);
  buffer.writeInt32LE(size * 2, 8);
  buffer.writeUInt16LE(1, 12);
  buffer.writeUInt16LE(32, 14);
  buffer.writeUInt32LE(0, 16);
  buffer.writeUInt32LE(xorSize, 20);
  buffer.writeInt32LE(0, 24);
  buffer.writeInt32LE(0, 28);
  buffer.writeUInt32LE(0, 32);
  buffer.writeUInt32LE(0, 36);

  let target = headerSize;

  for (let y = size - 1; y >= 0; y -= 1) {
    for (let x = 0; x < size; x += 1) {
      const source = (y * size + x) * 4;
      buffer[target] = rgba[source + 2];
      buffer[target + 1] = rgba[source + 1];
      buffer[target + 2] = rgba[source];
      buffer[target + 3] = rgba[source + 3];
      target += 4;
    }
  }

  for (let y = size - 1; y >= 0; y -= 1) {
    for (let x = 0; x < size; x += 1) {
      const alpha = rgba[(y * size + x) * 4 + 3];
      if (alpha < 128) {
        const maskOffset = headerSize + xorSize + (size - 1 - y) * maskRowSize + Math.floor(x / 8);
        buffer[maskOffset] |= 0x80 >> (x % 8);
      }
    }
  }

  return buffer;
}

function makeIco(images) {
  const headerSize = 6;
  const directorySize = images.length * 16;
  let offset = headerSize + directorySize;
  const chunks = [Buffer.alloc(headerSize), Buffer.alloc(directorySize)];

  chunks[0].writeUInt16LE(0, 0);
  chunks[0].writeUInt16LE(1, 2);
  chunks[0].writeUInt16LE(images.length, 4);

  images.forEach(({ size, data }, index) => {
    const entry = chunks[1].subarray(index * 16, index * 16 + 16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    chunks.push(data);
    offset += data.length;
  });

  return Buffer.concat(chunks);
}

const crcTable = new Uint32Array(256).map((_, index) => {
  let value = index;

  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }

  return value >>> 0;
});

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const name = Buffer.from(type);
  const chunk = Buffer.alloc(12 + data.length);
  chunk.writeUInt32BE(data.length, 0);
  name.copy(chunk, 4);
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(Buffer.concat([name, data])), 8 + data.length);
  return chunk;
}

function makePng(width, height, rgba) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  const raw = Buffer.alloc((width * 4 + 1) * height);

  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (width * 4 + 1);
    raw[rowStart] = 0;
    Buffer.from(rgba.buffer, rgba.byteOffset + y * width * 4, width * 4).copy(raw, rowStart + 1);
  }

  return Buffer.concat([
    signature,
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", deflateSync(raw)),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

const faviconImages = [16, 32, 48].map((size) => ({
  size,
  data: makeIcoImage(size, renderIcon(size)),
}));

const icon = renderIcon(512);
const appleIcon = renderIcon(180);

mkdirSync(appDir, { recursive: true });
writeFileSync(new URL("favicon.ico", appDir), makeIco(faviconImages));
writeFileSync(new URL("icon.png", appDir), makePng(512, 512, icon));
writeFileSync(new URL("apple-icon.png", appDir), makePng(180, 180, appleIcon));
