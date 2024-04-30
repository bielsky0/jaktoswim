import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  billboardType,
  pageType,
  heroSection,
  imageHeroSection,
  imageCarouselSection,
  videoHeroSection,
  contactSection,
  servicesSection,
  faqsSection,
  blogsSection,
  reviewsSection,
  blogType,
  marqueeSection,
  reviewType,
  galleryType,
} from "./shared/libs/sanity/schemas";

const config = defineConfig({
  projectId: "b4bxomg6",
  dataset: "production",
  title: "JakToSwim",
  apiVersion: "2024-04-28",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: [
      galleryType,
      faqsSection,
      blogsSection,
      reviewsSection,
      blogType,
      reviewType,
      heroSection,
      imageHeroSection,
      imageCarouselSection,
      videoHeroSection,
      contactSection,
      marqueeSection,
      servicesSection,
      billboardType,
      pageType,
    ],
  },
});

export default config;
