import { Logo } from "@/shared/components";
import { Blog } from "@/shared/libs/sanity/types";
import Image from "next/image";

export interface FeaturedHeroProps {
  blog: Blog;
}

export const FeaturedHero = ({
  blog: { coverImage, title },
}: FeaturedHeroProps) => {
  return (
    <div className="w-full pt-8 pb-12">
      <div className="pl-2 | sm:pl-6 | xl:pl-12 | 2xl:pl-20 | 3xl:pl-40 | 4xl:pl-60">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-[30%]">
            <div className="w-full h-full flex flex-col justify-end">
              <div className="flex w-full gap-4">
                <div className="w-16 h-16 rounded-lg | lg:rounded-xl inline-flex overflow-hidden relative">
                  <Logo className="w-full h-full rounded-l-2xl object-fill" />
                </div>

                <div className="leading-tight tracking-tight">
                  <div className="text-xs font-light mb-1 | text-gray-600 | dark:text-grayDark-100">
                    Napisane przez
                  </div>
                  <div className="text-gray-600 | dark:text-grayDark-100">
                    JakToSwim
                  </div>
                  <div className="font-light text-xs | lg:text-sm text-gray-400 | dark:text-grayDark-200">
                    CEO
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block  pb-4 md:pb-0">
            <h1 className="ibmPlex text-4xl font-bold">{title}</h1>
          </div>
          <div className="w-full md:w-[70%] relative">
            <div className="hidden md:block absolute z-10 w-full max-w-2xl bg-white py-6 p-3 rounded-2xl bottom-[45%] right-[25%] sm:right-[40%] md:right-[45%] lg:right-[50%]  xl:right-[55%] 2xl:right-[65%] ">
              <h1 className="ibmPlex text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold">
                {title}
              </h1>
            </div>
            <div className="mb-4  w-full  rounded-l-2xl transform-gpu overflow-hidden aspect-[9/16] md:aspect-[1/1] lg:rounded-l-2xl lg:aspect-[16/9] max-h-[360px] md:max-h-[640px]">
              <Image
                alt={
                  coverImage.alt ||
                  "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
                }
                placeholder="blur"
                width={1280}
                height={520}
                blurDataURL={coverImage.asset.metadata.lqip}
                loading="lazy"
                src={coverImage.asset.url}
                className="w-full h-full rounded-l-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
