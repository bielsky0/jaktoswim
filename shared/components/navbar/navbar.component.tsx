import { Hamburger, Logo } from "@/shared/components";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

import { ROUTES } from "@/shared/utils";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full h-[70px]  lg:h-[100px] flex items-center justify-between">
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
        <Hamburger />
      </div>
    </div>
  );
};
