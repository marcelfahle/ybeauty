import type { MetadataRoute } from "next";

const baseUrl = "https://www.ybeauty.es";

const routes = [
  { path: "", priority: 1 },
  { path: "/tratamientos-faciales", priority: 0.9 },
  { path: "/tratamientos-corporales", priority: 0.9 },
  { path: "/tratamientos-varios", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date("2026-05-10"),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
