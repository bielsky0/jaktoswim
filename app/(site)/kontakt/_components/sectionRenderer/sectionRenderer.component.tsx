import { FeaturedBlog, Marquee } from "@/shared/components";
import { Sections } from "@/shared/libs/sanity/types";
import { FeaturedHero } from "@/app/(site)/kontakt/_components";
import { FeaturedFAQs } from "@/app/(site)/zajecia/_components";

export interface SectionRendererProps {
  section: Sections;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  switch (section._type) {
    case "contact":
      return <FeaturedHero hero={section} />;
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
