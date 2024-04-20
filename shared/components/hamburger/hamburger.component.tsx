"use client";

import { useState } from "react";
import Link from "next/link";

import { ROUTES, cn } from "@/shared/utils";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center z-20"
      >
        <span
          className={`block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen
                          ? "rotate-45 translate-y-1 bg-white"
                          : "-translate-y-0.5  bg-black"
                      }`}
        ></span>

        <span
          className={`block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0 bg-white" : "opacity-100 bg-black"
                      }`}
        ></span>
        <span
          className={`block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen
                          ? "-rotate-45 -translate-y-1 bg-white"
                          : "translate-y-0.5 bg-black"
                      }`}
        ></span>
      </button>

      <div
        id="sideBar"
        className={cn(
          "fixed top-0 right-0 bg-transparent w-0 h-full overflow-x-hidden duration-500 z-10",
          {
            "w-0": !isOpen,
            "w-100": isOpen,
          }
        )}
      >
        <div
          id="sideNav"
          className={cn(
            "fixed top-0 right-0 bg-[#229ED9] h-full flex justify-center items-center overflow-x-hidden duration-500 font-bold z-50",
            {
              "w-0": !isOpen,
              "w-full": isOpen,
            }
          )}
        >
          <ul
            onClick={handleClick}
            className="flex flex-col text-2xl sm:text-3xl gap-4"
          >
            <li className="cursor-pointer">
              <Link className="text-white" href={ROUTES.blog}>
                Aktualności
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link className="text-white" href={ROUTES.about}>
                O Nas
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link className="text-white" href={ROUTES.gallery}>
                Galeria
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link className="text-white" href={ROUTES.offer}>
                Zajęcia
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link className="text-white" href={ROUTES.contact}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
