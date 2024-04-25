"use server";

import { strapiClient } from "@/shared/libs";
import { BlogParams } from "@/shared/libs/strapiClient/strapiClient.types";
import { AxiosError } from "axios";
import { unstable_cache } from "next/cache";

export const getBlogPost = unstable_cache(
  async (params: BlogParams) => {
    try {
      const blogPostData = await strapiClient.getPost(params);

      return blogPostData;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          if (error.response.status === 404) return null;
        }
      }

      throw error;
    }
  },
  ["blog-post-by-handle"],
  { revalidate: 3600 }
);

export const getBlogPosts = unstable_cache(
  async () => {
    const blogPostsData = await strapiClient.getPosts();

    return blogPostsData;
  },
  ["blog-post-by-handle"],
  { revalidate: 3600 }
);
