import { axiosClient } from "@/shared/libs";
import {
  BlogPostsReponse,
  BlogPostReponse,
  BlogParams,
  HomePageResponse,
  AboutUsResponse,
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
    const newUrl = buildPath("blog-posts/[id]", params ? params : {});
    const uncheckBlogPosts = await axiosClient.get<BlogPostReponse>(newUrl);

    return uncheckBlogPosts;
  }

  public async getHomePage() {
    const uncheckHomepage = await axiosClient.get<HomePageResponse>(
      "home?populate=deep"
    );

    return uncheckHomepage;
  }

  public async getAbouUsPage() {
    const uncheckedAboutUsPage = await axiosClient.get<AboutUsResponse>(
      "about-us?populate=deep"
    );

    return uncheckedAboutUsPage;
  }
}
