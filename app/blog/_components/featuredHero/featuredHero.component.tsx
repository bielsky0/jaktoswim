import { AboutUsSection } from "@/shared/libs/strapiClient/strapiClient.types";

export interface FeaturedHeroProps {
  hero: AboutUsSection;
}

export const FeaturedHero = ({ hero }: FeaturedHeroProps) => {
  const { title, subtitle, description } = hero;
  return (
    <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
      <div className="flex w-full">
        <div className="flex flex-col pb-2">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">{subtitle}</h5>
          </div>

          <div className="max-w-4xl">
            <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
              {title}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full pb-4">
        <div>
          <p className="text-lg  text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};
