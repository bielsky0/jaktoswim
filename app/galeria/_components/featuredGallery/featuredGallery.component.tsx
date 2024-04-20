import Image from "next/image";

import aboutUs1 from "@/public/about_us-1.jpg";
import aboutUs2 from "@/public/about_us-2.jpg";
import aboutUs3 from "@/public/about_us-3.jpg";
import aboutUs4 from "@/public/about_us-4.jpg";
import aboutUs5 from "@/public/about_us-5.jpg";
import aboutUs6 from "@/public/about_us-6.jpg";
import aboutUs7 from "@/public/featuredHero.png";
import aboutUs8 from "@/public/service1.jpg";
import aboutUs9 from "@/public/service3.jpg";
import aboutUs10 from "@/public/service2.jpg";

export const FeaturedGallery = () => {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs1}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>
      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs2}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>
      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs3}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>
      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs4}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>

      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs5}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>

      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs6}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>

      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs7}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>

      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs8}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>

      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs9}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>
      <div className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={aboutUs10}
          placeholder="blur"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        />
      </div>
    </div>
  );
};
