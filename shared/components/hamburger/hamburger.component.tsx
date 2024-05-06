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
    </>
  );
};
