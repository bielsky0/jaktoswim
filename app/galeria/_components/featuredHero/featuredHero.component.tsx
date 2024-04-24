import { Button } from "@/shared/components";
import { AboutUsSection } from "@/shared/libs/strapiClient/strapiClient.types";

export interface FeaturedHero {
  hero: AboutUsSection;
}

export const FeaturedHero = ({ hero }: FeaturedHero) => {
  const { title, description, subtitle, button_cta } = hero;

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-32">
      <div className="flex w-full pb-4 md:pb-0">
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center pb-2">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">{subtitle}</h5>
          </div>

          <div className="max-w-4xl pb-3">
            <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
              {title}
            </h2>
          </div>

          <div>
            <Button>{button_cta}</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 ">
        <div>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};
