import { Blog } from "./blog.types";

export type SectionType =
  | "imageHero"
  | "services"
  | "hero"
  | "billboard"
  | "featuredReviews"
  | "featuredBlogs"
  | "imageCarousel"
  | "contact"
  | "marquee"
  | "videoHero"
  | "faqs"
  | "contact";

export type File = {
  _type: "file";
  asset: {
    _ref: string;
    _type: string;
  };
};

export type Image = {
  _type: "image";
  alt: string | null;
  asset: {
    url: string;
    metadata: {
      lqip: string;
    };
  };
};

export type BillboardSection = {
  _type: "billboard";
  button_cta: string;
  subtitle: string;
  showreel: File;
  second_showreel: File;
};

export type ImageHeroSection = {
  _type: "imageHero";
  button_cta: string;
  subtitle: string;
  title: string;
  description: string;
  coverImage: Image;
};

export type ServicesSection = {
  _type: "services";
  button_cta: string;
  subtitle: string;
  title: string;
  description: string;
  coverVideo: File;
  services: {
    _key: string;
    title: string;
    description: string;
    coverIamge: Image;
  }[];
};

export type HeroSection = {
  _type: "hero";
  button_cta: string;
  subtitle: string;
  title: string;
  description: string;
};

export type Review = { content: string; author: string };

export type ReviewsSection = {
  _type: "featuredReviews";
  button_cta: string;
  subtitle: string;
  title: string;
  featuredReviews: Review[];
};

export type Slug = {
  current: string;
  _type: "slug";
};

export type FeaturedBlogsSection = {
  _type: "featuredBlogs";
  button_cta: string;
  subtitle: string;
  title: string;
  featuredBlogs: Blog[];
};
export type MarqueeSection = {
  _type: "marquee";
  content: string;
};

export type ImageCarouselSection = {
  _type: "imageCarousel";
  button_cta: string;
  images: Image[];
};

export type VideoHeroSection = {
  _type: "videoHero";
  coverVideo: File;
  title: string;
  description: string;
  subtitle: string;
};

export type FAQ = {
  question: string;
  answer: string;
  _key: string;
};

export type FAQsSection = {
  _type: "faqs";
  title: string;
  button_cta: string;
  faqs: FAQ[];
};

export type ContactSection = {
  _type: "contact";
  title: string;
  subtitle: string;
  coverIamge: Image;
  contact: {
    title: string;
    description: string;
    phoneNumber: string;
  };
};

export type Sections =
  | BillboardSection
  | ImageHeroSection
  | ServicesSection
  | HeroSection
  | ReviewsSection
  | FeaturedBlogsSection
  | MarqueeSection
  | ImageCarouselSection
  | VideoHeroSection
  | FAQsSection
  | ContactSection;
