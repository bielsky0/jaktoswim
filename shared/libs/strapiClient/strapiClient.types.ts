import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface BlogPostsReponse {
  data: BlogResponse[];
  meta: Record<string, string>;
}

export interface BlogPostReponse {
  data: BlogResponse;
  meta: Record<string, string>;
}

export type BlogResponse = {
  id: number;
  attributes: BlogAttributes;
};

export type BlogAttributes = {
  slug: string;
  Blog: Blog;
};

export type MultiImageStrapi = {
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
  }[];
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
export type Blog = {
  description: string;
  featuredImage: ImageStrapi;
  createdAt: string;
  title: string;
  content: BlocksContent;
  blog_posts: { data: BlogResponse[] };
};
export type BlogUI = {
  imageUrl: string;
  slug: string;
  createdAt: Date;
  title: string;
  description: string;
  content: BlocksContent;
};

export type BlogParams = {
  id: string;
};

export type BillboardSection = {
  id: number;
  subtitle: string;
  button_cta: string;
  showreel: ImageStrapi;
  second_showreel: ImageStrapi;
};

export type HeroSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string;
  description: string;
  coverImage: ImageStrapi;
};

export type Review = {
  id: number;
  attributes: {
    reviews: {
      id: 1;
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
  cover: ImageStrapi;
};

export type ServicesSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string;
  description: string;
  services: Service[];
};

export type AboutUsSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string;
  description: string;
};

export type BlogsSection = {
  id: number;
  title: string;
  subtitle: string;
  button_cta: string;
  blog_posts: {
    data: BlogResponse[];
  };
};

export interface HomePageAttributes {
  billboard: BillboardSection;
  hero: HeroSection;
  reviews: ReviewsSection;
  Services: ServicesSection;
  aboutUs: AboutUsSection;
  blogs: BlogsSection;
}

export interface HomePageResponse {
  data: {
    id: number;
    attributes: HomePageAttributes;
  };
}

export type ImageCarouselSection = {
  id: number;
  button_cta: string;
  images: MultiImageStrapi;
};

export interface AboutUsAttributes {
  hero: ImageCarouselSection;
  aboutUs: AboutUsSection;
  instructor: HeroSection;
  reviews: ReviewsSection;
  blogs: BlogsSection;
}

export interface AboutUsResponse {
  data: {
    id: number;
    attributes: AboutUsAttributes;
  };
}

export interface OfferAttributes {
  hero: HeroSection;
  services: ServicesSection;
  reviews: ReviewsSection;
  blogs: BlogsSection;
}

export interface OfferPageResponse {
  data: {
    id: number;
    attributes: OfferAttributes;
  };
}
