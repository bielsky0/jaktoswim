import Image from "next/image";

import { Button } from "@/shared/components";

import aboutUs1 from "@/public/about_us-1.jpg";
import aboutUs2 from "@/public/about_us-2.jpg";
import aboutUs3 from "@/public/about_us-3.jpg";
import aboutUs4 from "@/public/about_us-4.jpg";
import aboutUs5 from "@/public/about_us-5.jpg";
import aboutUs6 from "@/public/about_us-6.jpg";

export const FeaturedHero = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="text-center">
        <h1 className="ibmPlex text-3xl md:text-6xl font-semibold">
          <span>
            Nasz Instruktor,
            <br />
          </span>
          <span>
            Mistrz Wody!
            <br />
          </span>
        </h1>
      </div>

      <div className="overflow-hidden py-8 my-2 bg-white max-w-full">
        <div className=" flex gap-8 flex-nowrap animate-slide w-max">
          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              alt="aboutUs1"
              placeholder="blur"
              src={aboutUs1}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs2"
              src={aboutUs2}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs3"
              src={aboutUs3}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs4"
              src={aboutUs4}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs5"
              src={aboutUs5}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs6"
              src={aboutUs6}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs12"
              src={aboutUs1}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs22"
              src={aboutUs2}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs32"
              src={aboutUs3}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs42"
              src={aboutUs4}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              alt="aboutUs52"
              src={aboutUs5}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          <div className="rounded-2xl w-[200px] h-[250px]">
            <Image
              placeholder="blur"
              alt="aboutUs62"
              src={aboutUs6}
              className="w-full h-full object-fill rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div>
        <Button>Dowiedz Się Więcej</Button>
      </div>
    </div>
  );
};
