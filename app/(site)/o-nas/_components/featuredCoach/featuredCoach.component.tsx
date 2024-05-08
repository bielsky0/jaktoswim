import Image from "next/image";
import { Button, TransitionLink } from "@/shared/components";

import { ImageHeroSection } from "@/shared/libs/sanity/types";
import { ROUTES } from "@/shared/utils";

export interface FeaturedCoachProps {
  instructor: ImageHeroSection;
}

export const FeaturedCoach = ({ instructor }: FeaturedCoachProps) => {
  const { title, subtitle, button_cta, description, coverImage } = instructor;

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 ">
      <div className="flex w-full transform-gpu  justify-center lg:justify-end">
        <Image
          src={coverImage.asset.url}
          width={1280}
          height={500}
          placeholder="blur"
          loading="lazy"
          alt={
            coverImage.alt ||
            "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
          }
          blurDataURL={coverImage.asset.metadata.lqip}
          className="w-full h-full  max-h-[500px]  object-cover rounded-2xl"
        />
      </div>
      <div className="flex w-full h-full my-auto">
        <div className="flex flex-col lg:pl-16">
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
          <TransitionLink href={ROUTES.contact}>
            <Button>{button_cta}</Button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
};
