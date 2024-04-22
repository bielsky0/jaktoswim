"use server";

import { strapiClient } from "@/shared/libs";
import { BlogParams } from "@/shared/libs/strapiClient/strapiClient.types";
import { unstable_cache } from "next/cache";

export const getBlogPost = unstable_cache(
  async (params: BlogParams) => {
    const blogPostData = await strapiClient.getPost(params);

    return blogPostData;
  },
  ["blog-post-by-handle"],
  { revalidate: 1 }
);

export const getBlogPosts = unstable_cache(
  async () => {
    const blogPostsData = await strapiClient.getPosts();

    return blogPostsData;
  },
  ["blog-post-by-handle"],
  { revalidate: 1 }
);
