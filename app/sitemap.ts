import { MetadataRoute } from "next";
const BASE_URL = "";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(new Date().setHours(0, 0, 0, 0)),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(new Date().setHours(0, 0, 0, 0)),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/zajecia`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/galeria`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/o-nas`,
      lastModified: new Date(),
      priority: 1,
    },
  ];

  return staticRoutes;
}
