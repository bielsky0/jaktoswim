"use client";
import { IoClose } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";

export interface VideoPlayerProps {
  src: string;
  posterSrc?: string;
  className?: string;
  onClose?: () => void;
}

export const VideoPlayer = ({
  src,
  className,
  onClose,
  posterSrc,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState<number>(0);

  const updateProgress = () => {
    if (videoRef && videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;

      setProgress(currentProgress);
    }
  };

  const handlePlayPause = () => {
    if (videoRef && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (videoRef && videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <video
        poster={posterSrc}
        onClick={handlePlayPause}
        className={className}
        ref={videoRef}
        muted
        preload="none"
        autoPlay
        playsInline
        src={src}
      />

      <div
        onClick={() => {
          if (videoRef && videoRef.current) {
            if (videoRef.current.played) {
              videoRef.current.pause();
            }
          }
          if (onClose) onClose();
        }}
        className="cursor-pointer absolute top-4 right-4 z-20 w-10 h-10 bg-gray-600 bg-opacity-70 text-white rounded-full flex items-center justify-center"
      >
        <IoClose color="white" />
      </div>

      <div className="absolute bottom-0 w-full bg-white bg-opacity-20 h-[10px]">
        <div
          className="bg-[#229ED9] w-0 h-[10px]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
