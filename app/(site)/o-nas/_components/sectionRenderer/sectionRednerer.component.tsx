import { FeaturedBlog, FeaturedReviews, Marquee } from "@/shared/components";
import { Sections } from "@/shared/libs/sanity/types";
import {
  FeaturedAboutUs,
  FeaturedCoach,
  FeaturedHero,
} from "@/app/(site)/o-nas/_components";

export interface SectionRendererProps {
  section: Sections;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  switch (section._type) {
    case "imageCarousel":
      return <FeaturedHero hero={section} />;
    case "hero":
      return <FeaturedAboutUs aboutUs={section} />;
    case "imageHero":
      return <FeaturedCoach instructor={section} />;
    case "featuredReviews":
      return <FeaturedReviews reviews={section} />;
    case "marquee":
      return <Marquee />;
    case "featuredBlogs":
      return <FeaturedBlog featuredBlogs={section} />;
    default:
      return null;
  }
};
