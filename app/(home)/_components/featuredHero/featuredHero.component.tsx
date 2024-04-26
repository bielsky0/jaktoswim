import Image from "next/image";
import { Button } from "@/shared/components";
import { HeroSection } from "@/shared/libs/strapiClient/strapiClient.types";
import { strapiMediaToUi } from "@/shared/utils";

export interface FeaturedHeroProps {
  hero: HeroSection;
}

export const FeatureHero = ({ hero }: FeaturedHeroProps) => {
  const { title, subtitle, button_cta, coverImage, description } = hero;

  const cover = strapiMediaToUi(coverImage);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 ">
      <div className="flex w-full h-full my-auto">
        <div className="flex flex-col lg:pr-16">
          <div className="flex gap-2 items-center pb-2">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">{subtitle}</h5>
          </div>

          <div className="max-w-4xl pb-3">
            <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
              {title}
            </h2>
          </div>

          <div className="pb-4">
            <p className="text-sm lg:text-base">{description}</p>
          </div>
          <div>
            <Button href="/o-nas">{button_cta}</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full transform-gpu  justify-center lg:justify-end">
        <Image
          src={cover.data.attributes.url}
          width={720}
          height={500}
          className="w-full h-full  max-h-[500px]  object-cover rounded-2xl"
          alt="dasd"
        />
      </div>
    </div>
  );
};
