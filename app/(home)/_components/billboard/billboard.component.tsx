"use client";

import { useState } from "react";

import { Button, Modal } from "@/shared/components";

import showreelSrc from "@/public/showreel.mp4";
import hero_actionSrc from "@/public/hero_action.mp4";

export const Billboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className=" w-full relative">
        <div className="w-full  rounded-2xl transform-gpu overflow-hidden aspect-[9/16] md:aspect-[1/1] lg:rounded-2xl lg:aspect-[16/9]">
          <video
            className="w-full h-full rounded-2xl object-cover"
            loop
            muted
            autoPlay
            playsInline
          >
            <source type="video/mp4" src={showreelSrc} />
          </video>
        </div>

        <div className="absolute -top-8 -left-8">
          <div className="flex flex-col  pt-8 pl-8  relative ">
            <div className="flex gap-2  items-center">
              <div className="bg-white pr-8 py-4 flex  items-center gap-2 relative">
                <div className="absolute -right-[20px] top-0  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                <div className="absolute -right-[20px] bottom-0  h-[20px] w-[20px] rounded-full shadow-[-10px_10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>

                <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
                <h5 className="text-md lg:text-lg ">Cześć, popływajmy 👋</h5>
              </div>
            </div>

            <div>
              <h1 className="text-xl md:text-4xl block  lg:text-3xl font-bold">
                <span className="bg-white block rounded-r-xl w-fit py-1 pr-4">
                  Nasza szkółka to miejsce,
                  <br />
                </span>
                <span className="bg-white block w-fit rounded-br-xl py-1 pr-4 relative">
                  <div className="absolute -right-[20px] top-0  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                  gdzie woda łączy się z
                  <br />
                </span>
                <span className="bg-white block w-fit py-1 pr-4 relative">
                  <div className="absolute -right-[20px] top-0  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                  <div className="absolute -right-[20px] bottom-0  h-[20px] w-[20px] rounded-full shadow-[-10px_10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
                  niezapomnianymi
                  <br />
                </span>
                <span className="bg-white block rounded-r-xl w-fit pb-2 py-1 pr-4">
                  emocjami i rozwojem.
                  <br />
                </span>
              </h1>
            </div>

            <div className="flex justify-start bg-white block w-fit pb-4 py-2 pr-4 rounded-br-2xl items-center gap-4 relative">
              <div className="absolute left-0 -bottom-[20px]  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
              <div className="absolute -right-[20px] top-0  h-[20px] w-[20px] rounded-full shadow-[-10px_-10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>

              <Button>Zapisz Się!</Button>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setShowModal(true);
          }}
          className="absolute bg-white p-2 bottom-4 right-4 rounded-full flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-[#229ED9] rounded-full h-8 w-8 md:h-12 md:w-12"></div>

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
            <video
              className="w-full h-full rounded-2xl object-cover"
              loop
              muted
              autoPlay
              playsInline
            >
              <source type="video/mp4" src={hero_actionSrc} />
            </video>
          </div>
        </Modal>
      </div>
    </div>
  );
};
