"use client";

import { Hamburger, Logo, TransitionLink } from "@/shared/components";
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

  const [initialHeader, setIntialheader] = useState(false);
  const [navClassList, setNavClassList] = useState<string[]>([]);

  useEffect(() => {
    const _classList = [];
    setIntialheader(!(y <= 0));

    if (y > 200 && y - lastY > 0) _classList.push("-translate-y-48");

    setNavClassList(_classList);
  }, [y, lastY]);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full max-w-[2560px] transition-all transform-gpu flex flex-col items-center justify-center fixed z-[20]",
        navClassList
      )}
    >
      <div className="flex transition-all w-full justify-center px-4 md:px-8 lg:px-24 w-full">
        <div
          className={cn(
            "w-full  transition-all py-2 lg:py-4   flex flex-col items-center justify-between",
            {
              "bg-slate-100 backdrop-blur-md bg-opacity-80 px-8 rounded-3xl w-[16rem] lg:w-[60rem]":
                initialHeader,
              "bg-slate-100 backdrop-blur-md bg-opacity-1 px-8 rounded-3xl w-full":
                isOpen,
            }
          )}
        >
          <div className="w-full transition-all flex items-center justify-between">
            <div className="hidden lg:flex">
              <ul className="flex justify-center items-center gap-16">
                <li className="cursor-pointer">
                  <TransitionLink href={ROUTES.blog}>
                    Aktualności
                  </TransitionLink>
                </li>
                <li className="cursor-pointer">
                  <TransitionLink href={ROUTES.about}>O Nas</TransitionLink>
                </li>
                <li className="cursor-pointer">
                  <TransitionLink href={ROUTES.gallery}>Galeria</TransitionLink>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <TransitionLink href={ROUTES.home}>
                <Logo className="w-12 lg:w-20 cursor-pointer" />
              </TransitionLink>
            </div>

            <div
              onClick={() => {
                if (isOpen) handleClick();
              }}
              className="block lg:hidden"
            >
              <TransitionLink href={ROUTES.home}>
                <Logo className="w-12 lg:w-20 cursor-pointer" />
              </TransitionLink>
            </div>

            <div className="hidden lg:flex">
              <ul className="flex justify-center items-center gap-16">
                <li className="cursor-pointer">
                  <TransitionLink href={ROUTES.offer}>Zajęcia</TransitionLink>
                </li>
                <li className="cursor-pointer">
                  <TransitionLink href={ROUTES.contact}>Kontakt</TransitionLink>
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
            className={cn("w-full h-fit transition-all flex flex-col z-10", {
              "h-[0px] hidden": !isOpen,
            })}
          >
            <ul
              onClick={handleClick}
              className="flex flex-col text-2xl py-8 sm:text-3xl gap-4"
            >
              <li className="cursor-pointer">
                <TransitionLink href={ROUTES.blog}>Aktualności</TransitionLink>
              </li>
              <li className="cursor-pointer">
                <TransitionLink href={ROUTES.about}>O Nas</TransitionLink>
              </li>
              <li className="cursor-pointer">
                <TransitionLink href={ROUTES.gallery}>Galeria</TransitionLink>
              </li>
              <li className="cursor-pointer">
                <TransitionLink href={ROUTES.offer}>Zajęcia</TransitionLink>
              </li>
              <li className="cursor-pointer">
                <TransitionLink href={ROUTES.contact}>Kontakt</TransitionLink>
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
