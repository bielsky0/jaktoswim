"use client";

import { Hamburger, Layout, Logo } from "@/shared/components";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

import { ROUTES, cn } from "@/shared/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useOutside, useScrollListener } from "@/shared/hooks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentState) => !currentState);
  };

  const ref = useOutside(() => {
    setIsOpen(false);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "unset";
    }
  });

  const { y, lastY } = useScrollListener();

  const [test, setTest] = useState(false);

  useEffect(() => {
    if (y > 0) {
      setTest(true);
    }
    if (y <= 0) {
      setTest(false);
    }
  }, [y]);

  return (
    <div
      ref={ref}
      className="w-full transition-all flex flex-col items-center justify-center fixed z-50"
    >
      <div className="flex transition-all w-full justify-center px-4 md:px-8 lg:px-24 w-full">
        <div
          className={cn(
            "w-full  transition-all py-4   flex flex-col items-center justify-between",
            {
              "bg-slate-100 backdrop-blur-md bg-opacity-80 px-8 rounded-3xl w-[16rem] lg:w-[60rem]":
                test,
              "bg-slate-100 backdrop-blur-md bg-opacity-1 px-8 rounded-3xl w-full":
                isOpen,
            }
          )}
        >
          <div className="w-full transition-all flex items-center justify-between">
            <div className="hidden lg:flex">
              <ul className="flex justify-center items-center gap-16">
                <li className="cursor-pointer">
                  <Link href={ROUTES.blog}>Aktualności</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href={ROUTES.about}>O Nas</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href={ROUTES.gallery}>Galeria</Link>
                </li>
              </ul>
            </div>

            <Link href={ROUTES.home}>
              <Logo className="w-16 lg:w-24" />
            </Link>

            <div className="hidden lg:flex">
              <ul className="flex justify-center items-center gap-16">
                <li className="cursor-pointer">
                  <Link href={ROUTES.offer}>Zajęcia</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href={ROUTES.contact}>Kontakt</Link>
                </li>
                <li className="cursor-pointer flex gap-4">
                  <Link href="https://www.instagram.com/jaktoswim">
                    <FaInstagram className="w-8 h-8" />
                  </Link>

                  <Link href="https://www.facebook.com/jaktoswim">
                    <FaFacebook className="w-8 h-8" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex lg:hidden">
              <Hamburger handleClick={handleClick} isOpen={isOpen} />
            </div>
          </div>

          <div
            id="sideBar"
            className={cn("w-full transition-[height] flex flex-col z-10", {
              "h-fit opacity-100 flex": isOpen,
              "h-[0px] opacity-0 hidden": !isOpen,
            })}
          >
            <ul
              onClick={handleClick}
              className="flex flex-col text-2xl py-8 sm:text-3xl gap-4"
            >
              <li className="cursor-pointer">
                <Link className="text-black" href={ROUTES.blog}>
                  Aktualności
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link className="text-black" href={ROUTES.about}>
                  O Nas
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link className="text-black" href={ROUTES.gallery}>
                  Galeria
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link className="text-black" href={ROUTES.offer}>
                  Zajęcia
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link className="text-black" href={ROUTES.contact}>
                  Kontakt
                </Link>
              </li>
              <li className="cursor-pointer flex gap-4">
                <Link href="https://www.instagram.com/jaktoswim">
                  <FaInstagram color="black" className="w-8 h-8" />
                </Link>

                <Link href="https://www.facebook.com/jaktoswim">
                  <FaFacebook color="black" className="w-8 h-8" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
