import Image from "next/image";

import { Button, TransitionLink } from "@/shared/components";

import { ImageCarouselSection } from "@/shared/libs/sanity/types";
import { ROUTES } from "@/shared/utils";

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
            return (
              <div
                key={image.asset.url}
                className="rounded-2xl w-[200px] h-[250px]"
              >
                <Image
                  src={image.asset.url}
                  width={1280}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  alt={
                    image.alt ||
                    "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
                  }
                  blurDataURL={image.asset.metadata.lqip}
                  className="w-full h-full object-fill rounded-2xl"
                />
              </div>
            );
          })}

          {images.map((image) => {
            return (
              <div
                key={image.asset.url}
                className="rounded-2xl w-[200px] h-[250px]"
              >
                <Image
                  src={image.asset.url}
                  width={1280}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  alt={
                    image.alt ||
                    "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
                  }
                  blurDataURL={image.asset.metadata.lqip}
                  className="w-full h-full object-fill rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      <TransitionLink href={ROUTES.contact}>
        <Button>{button_cta}</Button>
      </TransitionLink>
    </div>
  );
};
