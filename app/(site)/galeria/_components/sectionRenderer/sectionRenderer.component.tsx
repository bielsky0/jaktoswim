import { Sections } from "@/shared/libs/sanity/types";
import { FeaturedHero } from "@/app/(site)/galeria/_components";

export interface SectionRendererProps {
  section: Sections;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  switch (section._type) {
    case "hero":
      return <FeaturedHero hero={section} />;
    default:
      return null;
  }
};
