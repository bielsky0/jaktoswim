"use client";

import showreelPosterSrc from "@/public/showreel_poster.jpg";
import { useRef, useState } from "react";

import { FaPlay, FaStop } from "react-icons/fa6";

export interface VideoPlayer2Props {
  src: string;
}

export const VideoPlayer2 = ({ src }: VideoPlayer2Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <video
        poster={showreelPosterSrc.src}
        ref={videoRef}
        className="w-full h-full rounded-2xl object-cover"
        muted
        playsInline
        controls={false}
        autoPlay={false}
        src={src}
      />

      <div className="absolute bg-white bottom-0 right-0 rounded-tl-2xl  flex items-center gap-2 cursor-pointer">
        <div className="relative w-full h-full p-2">
          <div className="absolute right-0 -top-[20px]  h-[20px] w-[20px] rounded-full shadow-[10px_10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>
          <div className="absolute -left-[20px] bottom-0  h-[20px] w-[20px] rounded-full shadow-[10px_10px_0_0_rgba(255,255,255,1)] bg-transparent"></div>

          <div onClick={handlePlayPause} className="flex cursor-pointer">
            <div
              className="py-2 text-sm md:text-base lg:text-lg px-4 bg-[#229ED9] text-white font-semibold
     rounded-full shadow-md outline-none "
            >
              {!isPlaying ? "Włącz Video" : "Wyłącz Video"}
            </div>
            <div className="bg-[#229ED9] rounded-full h-10 w-10 md:h-12 md:w-12 relative -translate-x-2">
              {!isPlaying ? (
                <FaPlay
                  color="white"
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                />
              ) : (
                <FaStop
                  color="white"
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
