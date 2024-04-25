import { BlocksContent } from "@strapi/blocks-react-renderer";

export type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type ImageFormats = {
  thumbnail: ImageFormat | null;
  small: ImageFormat | null;
  large: ImageFormat | null;
  medium: ImageFormat | null;
};

export type StrapiMedia = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: ImageFormats;
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

export type MultiStrapiMedia = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: ImageFormats;
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
  }[];
};

export type BillboardSection = {
  id: number;
  subtitle: string;
  button_cta: string;
  showreel: StrapiMedia;
  second_showreel: StrapiMedia;
};

export type HeroSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string | null;
  description: string;
  coverImage: StrapiMedia | StrapiMedia;
};

export type Review = {
  id: number;
  attributes: {
    reviews: {
      id: number;
      review: string;
      name: string;
    };
  };
};

export type ReviewsSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string;
  reviews: {
    data: Review[];
  };
};

export type Service = {
  id: number;
  title: string;
  description: string;
  cover: StrapiMedia;
};

export type ServicesSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string;
  description: string;
  services: Service[];
};

export type ImageCarouselSection = {
  id: number;
  button_cta: string;
  images: MultiStrapiMedia;
};

export type AboutUsSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string | null;
  description: string;
};

export type BlogsSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string;
  blog_posts: {
    data: StrapiBlog[];
  };
};

export type StrapiResponse<T> = {
  data: T;
};

export interface HomePageAttributes {
  billboard: BillboardSection;
  hero: HeroSection;
  reviews: ReviewsSection;
  Services: ServicesSection;
  aboutUs: AboutUsSection;
  blogs: BlogsSection;
}

export type HomePageResponse = StrapiResponse<{
  id: number;
  attributes: HomePageAttributes;
}>;

export interface AboutUsAttributes {
  hero: ImageCarouselSection;
  aboutUs: AboutUsSection;
  instructor: HeroSection;
  reviews: ReviewsSection;
  blogs: BlogsSection;
}

export type AboutUsPageResponse = StrapiResponse<{
  id: number;
  attributes: AboutUsAttributes;
}>;

export interface OfferAttributes {
  hero: HeroSection;
  services: ServicesSection;
  reviews: ReviewsSection;
  blogs: BlogsSection;
}

export type OfferPageResponse = StrapiResponse<{
  id: number;
  attributes: OfferAttributes;
}>;

export interface GalleryPageAttributes {
  hero: AboutUsSection;
}

export type GalleryPageResponse = StrapiResponse<{
  id: number;
  attributes: GalleryPageAttributes;
}>;

export interface BlogPageAttributes {
  hero: AboutUsSection;
}

export type BlogPageResponse = StrapiResponse<{
  id: number;
  attributes: BlogPageAttributes;
}>;

export type ImageResponse = {
  id: number;
  attributes: ImageAttributes;
};

export type ImageAttributes = {
  image: StrapiMedia;
};

export interface ImagesReponse {
  data: ImageResponse[];
  meta: Record<string, string>;
}

export interface BlogPostsReponse {
  data: StrapiBlog[];
  meta: Record<string, string>;
}

export interface BlogPostReponse {
  data: StrapiBlog;
  meta: Record<string, string>;
}

export type BlogAttributes = {
  slug: string;
  Blog: Blog;
};

export type StrapiBlog = {
  id: number;
  attributes: BlogAttributes;
};

export type BlogParams = {
  id: string;
};

export type Blog = {
  description: string;
  featuredImage: StrapiMedia;
  createdAt: string;
  title: string;
  content: BlocksContent;
  blog_posts: { data: StrapiBlog[] };
};
export type BlogUI = {
  imageUrl: string;
  slug: string;
  createdAt: Date;
  title: string;
  description: string;
  content: BlocksContent;
};
