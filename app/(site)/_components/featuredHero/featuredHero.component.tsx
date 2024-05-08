import Image from "next/image";
import { Button, TransitionLink } from "@/shared/components";
import { ImageHeroSection } from "@/shared/libs/sanity/types";
import { getImageAsset } from "@sanity/asset-utils";
import { config } from "@/shared/libs/sanity/config";

export interface FeaturedHeroProps {
  hero: ImageHeroSection;
}

export const FeatureHero = ({ hero }: FeaturedHeroProps) => {
  const { title, subtitle, button_cta, coverImage, description } = hero;

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
          <TransitionLink href="/o-nas">
            <Button>{button_cta}</Button>
          </TransitionLink>
        </div>
      </div>

      <div className="flex w-full transform-gpu  justify-center lg:justify-end">
        <Image
          src={coverImage.asset.url}
          width={720}
          height={500}
          className="w-full h-full max-h-[500px] object-cover rounded-2xl"
          placeholder="blur"
          loading="lazy"
          blurDataURL={coverImage.asset.metadata.lqip}
          alt={
            coverImage.alt ||
            "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
          }
        />
      </div>
    </div>
  );
};
