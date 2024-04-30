import {
  Billboard,
  FeatureHero,
  FeaturedAboutUs,
  FeaturedServices,
} from "@/app/(site)/_components";
import { FeaturedBlog, FeaturedReviews, Marquee } from "@/shared/components";
import { Sections } from "@/shared/libs/sanity/types";

export interface SectionRendererProps {
  section: Sections;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  switch (section._type) {
    case "billboard":
      return <Billboard billboard={section} />;
    case "imageHero":
      return <FeatureHero hero={section} />;
    case "services":
      return <FeaturedServices services={section} />;
    case "hero":
      return <FeaturedAboutUs aboutUs={section} />;
    case "featuredReviews":
      return <FeaturedReviews reviews={section} />;
    case "featuredBlogs":
      return <FeaturedBlog featuredBlogs={section} />;
    case "marquee":
      return <Marquee />;
    default:
      return null;
  }
};
