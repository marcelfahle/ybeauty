import { ImageResponse } from "next/og";

export const alt = "Y beauty, salón de belleza en Dénia";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f8f5ef",
        color: "#123f45",
        fontFamily: "Georgia, serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: 520,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 70px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 18,
              fontSize: 72,
              lineHeight: 1,
            }}
          >
            <span style={{ fontSize: 118, fontStyle: "italic" }}>y</span>
            <span>beauty</span>
          </div>
          <div
            style={{
              height: 4,
              width: 280,
              background: "#123f45",
              borderRadius: 999,
            }}
          />
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: 30 }}>Cuida de ti</div>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 26,
            color: "#d2835f",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Cita previa imprescindible
        </div>
      </div>
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          color: "#f8f5ef",
          background: "#123f45",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 6,
            background: "#d2835f",
            borderRadius: 999,
            marginBottom: 48,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 26,
            color: "#d2835f",
            fontWeight: 700,
            marginBottom: 26,
            textTransform: "uppercase",
          }}
        >
          Salón de belleza en Dénia
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 74,
            lineHeight: 1.04,
            maxWidth: 560,
          }}
        >
          Belleza, calma y cuidado real
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 27,
            lineHeight: 1.45,
            color: "#cbd7d5",
            maxWidth: 560,
            marginTop: 34,
          }}
        >
          Tratamientos faciales, corporales, depilación y maquillaje en Av. Joan Fuster.
        </div>
      </div>
    </div>,
    size,
  );
}
