"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ROUTES, cn } from "@/shared/utils";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export interface HamburgerProps {
  isOpen: boolean;
  handleClick: () => void;
}

export const Hamburger = ({ isOpen, handleClick }: HamburgerProps) => {
  useEffect(() => {
    if (isOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }

    if (!isOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "unset";
      }
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center z-20"
      >
        <span
          className={`block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm bg-black ${
                        isOpen
                          ? "rotate-45 translate-y-1"
                          : "-translate-y-0.5  "
                      }`}
        ></span>

        <span
          className={`block transition-all bg-black duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100 "
                      }`}
        ></span>
        <span
          className={`block transition-all bg-black duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen
                          ? "-rotate-45 -translate-y-1"
                          : "translate-y-0.5 "
                      }`}
        ></span>
      </button>

      {/* <div
        id="sideBar"
        className={cn(
          "w-full flex flex-col overflow-x-hidden z-10 bg-slate-100 backdrop-blur-md bg-opacity-80 ",
          {
            "h-[27rem]": isOpen,
            "h-[0rem]": !isOpen,
          }
        )}
        > */}

      {/* <div
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
            <li className="cursor-pointer flex gap-4">
              <Link href="https://www.instagram.com/jaktoswim">
                <FaInstagram color="white" className="w-8 h-8" />
              </Link>

              <Link href="https://www.facebook.com/jaktoswim">
                <FaFacebook color="white" className="w-8 h-8" />
              </Link>
            </li>
          </ul>
        </div> */}
      {/* </div> */}
    </>
  );
};
