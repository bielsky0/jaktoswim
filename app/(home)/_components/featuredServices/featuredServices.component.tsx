import { Button } from "@/shared/components";

import service1Src from "@/public/service1.jpg";
import service2Src from "@/public/service.jpg";
import service3Src from "@/public/service3.jpg";

import Image from "next/image";
import { ServicesSection } from "@/shared/libs/strapiClient/strapiClient.types";
import { strapiImgToImg } from "@/shared/utils";

export interface FeaturedServicesProps {
  services: ServicesSection;
}

export const FeaturedServices = ({ services }: FeaturedServicesProps) => {
  const {
    title,
    description,
    button_cta,
    subtitle,
    services: featuredServices,
  } = services;

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
              <Button>{button_cta}</Button>
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
          <Button>{button_cta}</Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-12 pt-16 ">
        {featuredServices.map(({ title, description, cover }) => {
          const imageUi = strapiImgToImg(cover);
          return (
            <div className="w-full flex flex-col md:flex-row items-center  md:gap-16  lg:gap-32">
              <div className="w-full pb-2 md:pb-0">
                <div className="h-[150px] md:h-[300px]">
                  <Image
                    alt="dasd"
                    width={520}
                    height={300}
                    src={imageUi.data.attributes.url}
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
    </div>
  );
};
