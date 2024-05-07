import { Image, Slug } from "./sections.types";

export type Blog = {
  slug: Slug;
  description: string;
  keywords: string;
  title: string;
  content: object[];
  coverImage: Image;
  _createdAt: string;
  featuredBlogs: Blog[];
};
