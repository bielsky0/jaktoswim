import { axiosClient } from "@/shared/libs";
import {
  BlogPostsReponse,
  BlogPostReponse,
  BlogParams,
} from "./strapiClient.types";
import { buildPath } from "@/shared/utils";

export class StrapiClient {
  public async getPosts(): Promise<BlogPostsReponse> {
    const uncheckBlogPosts = await axiosClient.get<BlogPostsReponse>(
      "blog-posts?populate=*"
    );

    return uncheckBlogPosts;
  }

  public async getPost(params: BlogParams) {
    const newUrl = buildPath(
      "blog-posts/[id]?populate=*",
      params ? params : {}
    );

    const uncheckBlogPosts = await axiosClient.get<BlogPostReponse>(newUrl);

    return uncheckBlogPosts;
  }
}
