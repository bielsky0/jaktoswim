import { getAllBlogs } from "@/shared/libs/sanity/client";
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(new Date().setHours(0, 0, 0, 0)),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(new Date().setHours(0, 0, 0, 0)),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(new Date().setHours(0, 0, 0, 0)),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/o-nas`,
      lastModified: new Date(new Date().setHours(0, 0, 0, 0)),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/zajecia`,
      lastModified: new Date(new Date().setHours(0, 0, 0, 0)),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/galeria`,
      lastModified: new Date(),
      priority: 0.1,
    },
  ];

  const blogPosts = await getAllBlogs();

  const blogPostsRoute: MetadataRoute.Sitemap = blogPosts.map((blog) => {
    return {
      url: `${BASE_URL}/blog/${blog.slug.current}`,
      lastModified: new Date(blog._createdAt),
      priority: 0.5,
      changeFrequency: "weekly",
    };
  });

  return [...staticRoutes, ...blogPostsRoute];
}
