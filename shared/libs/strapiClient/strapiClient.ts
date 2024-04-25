import { axiosClient } from "@/shared/libs";
import {
  BlogPostsReponse,
  BlogPostReponse,
  BlogParams,
  HomePageResponse,
  AboutUsPageResponse,
  OfferPageResponse,
  BlogPageResponse,
  ImagesReponse,
  GalleryPageResponse,
} from "./strapiClient.types";
import { buildPath } from "@/shared/utils";

export class StrapiClient {
  public async getPosts(): Promise<BlogPostsReponse> {
    const uncheckBlogPosts = await axiosClient.get<BlogPostsReponse>(
      "blog-posts?populate=*"
    );

    return uncheckBlogPosts;
  }

  public async getImages(): Promise<ImagesReponse> {
    const uncheckImages = await axiosClient.get<ImagesReponse>(
      "images?populate=deep"
    );

    return uncheckImages;
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

  public async getAboutUsPage() {
    const uncheckedAboutUsPage = await axiosClient.get<AboutUsPageResponse>(
      "about-us?populate=deep"
    );

    return uncheckedAboutUsPage;
  }

  public async getOfferPage() {
    const unchekdOfferPage = await axiosClient.get<OfferPageResponse>(
      "offer?populate=deep"
    );

    return unchekdOfferPage;
  }

  public async getBlogPage() {
    const uncheckedBlogPage = await axiosClient.get<BlogPageResponse>(
      "blog?populate=deep"
    );

    return uncheckedBlogPage;
  }

  public async getGalleryPage() {
    const uncheckedBlogPage = await axiosClient.get<GalleryPageResponse>(
      "gallery?populate=deep"
    );

    return uncheckedBlogPage;
  }
}
