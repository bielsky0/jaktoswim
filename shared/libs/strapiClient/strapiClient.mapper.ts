import { strapiImgToImg } from "@/shared/utils/strapiImgToImg";
import { Blog, BlogUI } from "./strapiClient.types";

export const blogPostMapper = (blog: Blog): BlogUI => {
  const blogUi: BlogUI = {
    id: blog.id,
    content: blog.attributes.content,
    title: blog.attributes.title,
    description: blog.attributes.description,
    imageUrl: strapiImgToImg(blog.attributes.featuredImage).data.attributes.url,
    createdAt: new Date(blog.attributes.createdAt),
  };
  return blogUi;
};
