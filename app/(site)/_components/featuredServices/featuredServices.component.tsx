import { Button, TransitionLink, VideoPlayer2 } from "@/shared/components";
import { config } from "@/shared/libs/sanity/config";
import { ServicesSection } from "@/shared/libs/sanity/types";
import { ROUTES } from "@/shared/utils";
import { getFileAsset, getImageAsset } from "@sanity/asset-utils";
import Image from "next/image";

export interface FeaturedServicesProps {
  services: ServicesSection;
}

export const FeaturedServices = ({ services }: FeaturedServicesProps) => {
  const {
    title,
    description,
    button_cta,
    subtitle,
    coverVideo,
    services: featuredServices,
  } = services;

  const coverVideoUi = getFileAsset(coverVideo, config);

  return (
    <div className="w-full flex  justify-center flex-col ">
      <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
        <div className="flex w-full">
          <div className="flex flex-col ">
            <div className="flex gap-2 items-center pb-2">
              <div className="h-[8px] w-[8px] bg-white rounded-full"></div>
              <h5 className="text-white text-sm md:text-base">{subtitle}</h5>
            </div>

            <div className="max-w-4xl pb-3">
              <h2 className="ibmPlex text-2xl md:text-4xl font-semibold text-white">
                {title}
              </h2>
            </div>

            <div className="hidden lg:flex ">
              <TransitionLink href={ROUTES.contact}>
                <Button>{button_cta}</Button>
              </TransitionLink>
            </div>
          </div>
        </div>

        <div className="flex w-full pb-4">
          <div>
            <p className="text-lg text-white text-sm lg:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="flex lg:hidden ">
          <TransitionLink href={ROUTES.contact}>
            <Button>{button_cta}</Button>
          </TransitionLink>
        </div>
      </div>

      <div className="w-full flex flex-col gap-12 pt-16 ">
        {featuredServices.map(({ title, description, coverIamge }) => {
          const imageUi = getImageAsset(coverIamge, config);
          return (
            <div
              key={imageUi._id}
              className="w-full flex flex-col md:flex-row items-center  md:gap-16  lg:gap-32"
            >
              <div className="w-full pb-2 md:pb-0">
                <div className="h-[150px] md:h-[300px]">
                  <Image
                    alt="dasd"
                    width={520}
                    height={300}
                    src={imageUi.url}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full md:gap-8 ">
                <div className="pb-3 md:pb-0">
                  <h5 className="ibmPlex text-white text-2xl lg:text-4xl font-bold">
                    {title}
                  </h5>
                </div>

                <div>
                  <p className="text-white text-sm lg:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full relative">
        <div className="rounded-t-2xl h-80 w-full "></div>

        <div className="absolute w-full h-[550px] aspect-[9/16] md:aspect-[1/1] lg:rounded-2xl lg:aspect-[16/9]  top-24 rounded-2xl ">
          <VideoPlayer2 src={coverVideoUi.url} />
        </div>
      </div>
    </div>
  );
};
