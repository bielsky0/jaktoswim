import { Blog } from "./blog.types";
import { GalleryImage } from "./gallery.types";
import { Sections } from "./sections.types";

export type PageType = {
  _id: string;
  keywords: string;
  description: string;
  pageBuilder: Sections[];
};

export type BlogPage = {
  blogs: Blog[] | null;
  blogPage: PageType | null;
};

export type GalleryPage = {
  images: GalleryImage[] | null;
  galleryPage: PageType | null;
};
