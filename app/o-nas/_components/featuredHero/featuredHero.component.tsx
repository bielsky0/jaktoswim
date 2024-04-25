import Image from "next/image";

import { Button } from "@/shared/components";

import { ImageCarouselSection } from "@/shared/libs/strapiClient/strapiClient.types";
import { strapiMultiImgtoUiMultiImg } from "@/shared/utils";

export interface FeaturedHeroProps {
  hero: ImageCarouselSection;
}

export const FeaturedHero = ({ hero }: FeaturedHeroProps) => {
  const { images, button_cta } = hero;

  const imagesUi = strapiMultiImgtoUiMultiImg(images);

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
          {imagesUi.data.map((image) => {
            return (
              <div className="rounded-2xl w-[200px] h-[250px]">
                <Image
                  alt="aboutUs1"
                  width={200}
                  height={250}
                  src={image.attributes.url}
                  className="w-full h-full object-fill rounded-2xl"
                />
              </div>
            );
          })}

          {imagesUi.data.map((image) => {
            return (
              <div className="rounded-2xl w-[200px] h-[250px]">
                <Image
                  alt="aboutUs1"
                  width={200}
                  height={250}
                  src={image.attributes.url}
                  className="w-full h-full object-fill rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Button>{button_cta}</Button>
      </div>
    </div>
  );
};
