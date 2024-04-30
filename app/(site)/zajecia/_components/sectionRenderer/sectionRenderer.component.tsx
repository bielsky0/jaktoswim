import { FeaturedBlog, FeaturedReviews, Marquee } from "@/shared/components";
import { Sections } from "@/shared/libs/sanity/types";
import {
  FeaturedFAQs,
  FeaturedHero,
  FeaturedOffer,
} from "@/app/(site)/zajecia/_components";

export interface SectionRendererProps {
  section: Sections;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  switch (section._type) {
    case "videoHero":
      return <FeaturedHero hero={section} />;
    case "services":
      return <FeaturedOffer services={section} />;
    case "featuredReviews":
      return <FeaturedReviews reviews={section} />;
    case "marquee":
      return <Marquee />;
    case "featuredBlogs":
      return <FeaturedBlog featuredBlogs={section} />;
    case "faqs":
      return <FeaturedFAQs faqs={section} />;
    default:
      return null;
  }
};
