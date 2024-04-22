import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface BlogPostsReponse {
  data: Blog[];
  meta: Record<string, string>;
}

export interface BlogPostReponse {
  data: Blog;
  meta: Record<string, string>;
}

export type Blog = {
  id: number;
  attributes: BlogAttributes;
};

export type BlogAttributes = {
  description: string;
  featuredImage: ImageStrapi;
  createdAt: string;
  title: string;
  content: BlocksContent;
};

export type ImageStrapi = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: [object];
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type BlogUI = {
  id: number;
  imageUrl: string;
  createdAt: Date;
  title: string;
  description: string;
  content: BlocksContent;
};

export type BlogParams = {
  id: string;
};
