import { strapiImgToImg } from "@/shared/utils/strapiImgToImg";
import { Blog, BlogUI } from "./strapiClient.types";

export const blogPostMapper = (data: { blog: Blog; slug: string }): BlogUI => {
  const blogUi: BlogUI = {
    slug: data.slug,
    content: data.blog.content,
    title: data.blog.title,
    description: data.blog.description,
    imageUrl: strapiImgToImg(data.blog.featuredImage).data.attributes.url,
    createdAt: new Date(data.blog.createdAt),
  };
  return blogUi;
};
