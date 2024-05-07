"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

import {
  Button,
  Modal,
  TransitionLink,
  VideoPlayer,
} from "@/shared/components";

import showreelPosterSrc from "@/public/showreel_poster.jpg";
import { BillboardSection } from "@/shared/libs/sanity/types";
import { getFileAsset } from "@sanity/asset-utils";
import { config } from "@/shared/libs/sanity/config";
import { ROUTES } from "@/shared/utils";

export interface BillboardProps {
  billboard: BillboardSection;
}

export const Billboard = ({ billboard }: BillboardProps) => {
  const [showModal, setShowModal] = useState(false);

  const { showreel, second_showreel, subtitle, button_cta } = billboard;

  const sanityShowreel = getFileAsset(showreel, config);
  const sanitySecondShowreel = getFileAsset(second_showreel, config);

  return (
    <div>
      <div className=" w-full relative">
        <div className="w-full  rounded-2xl transform-gpu overflow-hidden aspect-[9/16] md:aspect-[1/1] lg:rounded-2xl lg:aspect-[16/9] max-h-[720px]">
          <video
            className="w-full h-full rounded-2xl object-cover"
            loop
            muted
            autoPlay
            playsInline
            controls={false}
            poster={showreelPosterSrc.src}
          >
            <source type="video/mp4" src={sanityShowreel.url} />
          </video>
        </div>

        <div className="absolute -top-8 -left-8">
          <div className="flex flex-col  pt-8 pl-8  relative ">
            <div className="flex gap-2  items-center">
              <div className="bg-white lg:pr-8 pr-4 py-2 lg:py-4 flex  items-center gap-2 relative">
                <div className="absolute -right-[20px] top-0  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                <div className="absolute -right-[20px] bottom-0  h-[20px] w-[20px] rounded-full shadow-[-10px_10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>

                <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
                <h5 className="text-base lg:text-lg">{subtitle}</h5>
              </div>
            </div>

            <div>
              <h1 className="ibmPlex text-2xl md:text-4xl block  lg:text-5xl font-bold">
                <span className="bg-white block rounded-r-xl w-fit md:py-1 pr-3">
                  Nasza szkółka to miejsce,
                  <br />
                </span>
                <span className="bg-white block w-fit rounded-br-xl md:pb-1  pr-3 relative">
                  <div className="absolute -right-[15px] top-0  h-[15px] w-[15px] rounded-full shadow-[-5px_-5px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                  gdzie woda łączy się z
                  <br />
                </span>
                <span className="bg-white block w-fit md:pb-1  pr-4 relative">
                  <div className="absolute -right-[15px] top-0 h-[15px] w-[15px] rounded-full shadow-[-5px_-5px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                  <div className="absolute -right-[15px] bottom-0 h-[15px] w-[15px] rounded-full shadow-[-5px_5px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                  niezapomnianymi
                  <br />
                </span>
                <span className="bg-white block rounded-r-xl w-fit pb-1  pr-3">
                  emocjami i rozwojem.
                  <br />
                </span>
              </h1>
            </div>

            <div className="pt-2 flex justify-start bg-white block w-fit pb-2 pr-1 rounded-br-2xl items-center gap-4 relative ">
              <div className="absolute left-0 -bottom-[20px]  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
              <div className="absolute -right-[20px] top-0  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>

              <TransitionLink href={ROUTES.contact}>
                <Button>{button_cta}</Button>
              </TransitionLink>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setShowModal(true);

            if (typeof window != "undefined" && window.document) {
              document.body.style.overflow = "hidden";
            }
          }}
          className="absolute bg-white pl-1 py-1 bottom-4 right-4 rounded-full flex items-center gap-2 cursor-pointer "
        >
          <div className="bg-[#229ED9] rounded-full h-10 w-10 md:h-12 md:w-12 relative">
            <FaPlay
              color="white"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
          </div>

          <div className="flex flex-col pr-4 ">
            <div>
              <h5 className="font-bold text-sm md:text-base">
                Zobacz Kacpra w akcji!
              </h5>
            </div>

            <div>
              <h6 className="text-[12px] md:text-sm">
                Instruktor pływania JakToSwim
              </h6>
            </div>
          </div>
        </div>

        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="w-full  transform-gpu overflow-hidden  rounded-2xl aspect-[16/9]">
            <VideoPlayer
              posterSrc={showreelPosterSrc.src}
              onClose={() => {
                setShowModal(false);
                if (typeof window != "undefined" && window.document) {
                  document.body.style.overflow = "unset";
                }
              }}
              className="w-full h-full rounded-2xl object-cover"
              src={sanitySecondShowreel.url}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};
