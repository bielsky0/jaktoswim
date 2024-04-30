import Image from "next/image";

import { Button } from "@/shared/components";

import { ImageCarouselSection } from "@/shared/libs/sanity/types";
import { getImageAsset } from "@sanity/asset-utils";
import { config } from "@/shared/libs/sanity/config";

export interface FeaturedHeroProps {
  hero: ImageCarouselSection;
}

export const FeaturedHero = ({ hero }: FeaturedHeroProps) => {
  const { images, button_cta } = hero;

  return (
    <div className="flex flex-col w-full items-center">
      <div className="text-center">
        <h1 className="ibmPlex text-3xl md:text-6xl font-semibold">
          <span>
            Nasz Instruktor,
            <br />
          </span>
          <span>
            Mistrz Wody!
            <br />
          </span>
        </h1>
      </div>

      <div className="overflow-hidden py-8 my-2 bg-white max-w-full">
        <div className=" flex gap-8 flex-nowrap animate-slide w-max">
          {images.map((image) => {
            const sanityImage = getImageAsset(image, config);
            return (
              <div
                key={sanityImage._id}
                className="rounded-2xl w-[200px] h-[250px]"
              >
                <Image
                  alt="aboutUs1"
                  width={200}
                  height={250}
                  src={sanityImage.url}
                  className="w-full h-full object-fill rounded-2xl"
                />
              </div>
            );
          })}

          {images.map((image) => {
            const sanityImage = getImageAsset(image, config);
            return (
              <div
                key={`${sanityImage._id}-2`}
                className="rounded-2xl w-[200px] h-[250px]"
              >
                <Image
                  alt="aboutUs1"
                  width={200}
                  height={250}
                  src={sanityImage.url}
                  className="w-full h-full object-fill rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Button href="/kontakt">{button_cta}</Button>
      </div>
    </div>
  );
};
