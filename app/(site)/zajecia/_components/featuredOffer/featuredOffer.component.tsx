import Image from "next/image";

import { Button, TransitionLink } from "@/shared/components";

import { ServicesSection } from "@/shared/libs/sanity/types";
import { getImageAsset } from "@sanity/asset-utils";
import { config } from "@/shared/libs/sanity/config";
import { ROUTES } from "@/shared/utils";

export interface FeaturedOfferProps {
  services: ServicesSection;
}

export const FeaturedOffer = ({ services }: FeaturedOfferProps) => {
  const {
    title,
    subtitle,
    description,
    button_cta,
    services: featuredServices,
  } = services;

  return (
    <div className="w-full flex  justify-center flex-col ">
      <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
        <div className="flex w-full">
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

            <div className="hidden lg:flex">
              <TransitionLink href={ROUTES.contact}>
                <Button>{button_cta}</Button>
              </TransitionLink>
            </div>
          </div>
        </div>

        <div className="flex w-full pb-4">
          <div>
            <p className="text-sm lg:text-base">{description}</p>
          </div>
        </div>

        <div className="flex lg:hidden pb-5">
          <TransitionLink href={ROUTES.contact}>
            <Button>{button_cta}</Button>
          </TransitionLink>
        </div>
      </div>

      <div className="w-full flex flex-col py-12 gap-12">
        {featuredServices.map(({ coverIamge, title, description }) => {
          return (
            <div
              key={coverIamge.asset.url}
              className="w-full flex flex-col md:flex-row items-center md:gap-16  lg:gap-32"
            >
              <div className="w-full pb-2">
                <div className="h-[150px] md:h-[300px]">
                  <Image
                    src={coverIamge.asset.url}
                    width={1280}
                    height={500}
                    placeholder="blur"
                    loading="lazy"
                    alt={
                      coverIamge.alt ||
                      "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
                    }
                    blurDataURL={coverIamge.asset.metadata.lqip}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className=" pb-3">
                  <h5 className="ibmPlex text-black text-2xl lg:text-4xl font-bold">
                    {title}
                  </h5>
                </div>

                <div className="pb-4">
                  <p className="text-black text-sm lg:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
