import Image from "next/image";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { ContactSection } from "@/shared/libs/sanity/types";

export interface FeaturedHeroProps {
  hero: ContactSection;
}

export const FeaturedHero = ({ hero }: FeaturedHeroProps) => {
  const {
    title,
    coverIamge,
    subtitle,
    contact: { title: contactTitle, description, phoneNumber },
  } = hero;

  return (
    <div className="flex flex-col lg:flex-row w-full  gap-8 lg:gap-0">
      <div className="flex w-full flex-col justify-between ">
        <div className="flex flex-col pb-2">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
            <h5 className="text-sm md:text-base">{subtitle}</h5>
          </div>

          <div className="max-w-4xl pb-3">
            <h2 className="ibmPlex text-2xl md:text-7xl font-semibold">
              {title}
            </h2>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2">
          <div className="flex flex-col gap-4">
            <div className="max-w-4xl">
              <h2 className="ibmPlex text-xl lg:text-4xl font-semibold">
                {contactTitle}
              </h2>
            </div>

            <div>
              <p className="text">{description}</p>
            </div>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-4">
                <div>
                  <h6 className="text-lg font-semibold">Zadzwoń</h6>
                </div>

                <div>
                  <p>{phoneNumber}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h6 className="text-lg font-semibold">Lub Napisz</h6>
                </div>

                <div className="flex gap-4 flex-col">
                  <Link href="https://instagram.com/jaktoswim">
                    <div className="flex gap-2 items-center">
                      <FaInstagram /> <span>Instagram</span>
                    </div>
                  </Link>
                  <Link href="https://facebook.com/jaktoswim">
                    <div className="flex gap-2 items-center">
                      <FaFacebook /> <span>Facebook</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 flex-col gap-4 ">
        <div className="flex w-full transform-gpu  justify-center lg:justify-end ">
          <Image
            src={coverIamge.asset.url}
            width={720}
            height={500}
            placeholder="blur"
            loading="lazy"
            blurDataURL={coverIamge.asset.metadata.lqip}
            className="max-h-[350px] lg:max-h-[500px] w-full h-full  max-h-[500px]  object-cover rounded-2xl"
            alt={
              coverIamge.alt ||
              "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
            }
          />
        </div>
      </div>
    </div>
  );
};
