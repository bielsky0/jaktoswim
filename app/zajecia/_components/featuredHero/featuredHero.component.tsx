import showreelPosterSrc from "@/public/showreel_poster.jpg";
import { HeroSection } from "@/shared/libs/strapiClient/strapiClient.types";
import { strapiMediaToUi } from "@/shared/utils";

export interface FeaturedHeroProps {
  hero: HeroSection;
}

export const FeaturedHero = ({ hero }: FeaturedHeroProps) => {
  const { title, description, coverImage, subtitle } = hero;

  const coverUi = strapiMediaToUi(coverImage);

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full  lg:gap-32">
        <div className="flex w-full">
          <div className="flex flex-col pb-2">
            <div className="flex gap-2 items-center">
              <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
              <h5 className="text-sm md:text-base">{subtitle}</h5>
            </div>

            <div className="max-w-4xl">
              <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
                {title}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex w-full pb-4">
          <div>
            <p className="text-lg  text-sm lg:text-base">{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full  rounded-2xl transform-gpu overflow-hidden aspect-[9/16] md:aspect-[1/1] lg:rounded-2xl lg:aspect-[16/9] max-h-[640px]">
        <video
          className="w-full h-full rounded-2xl object-cover"
          loop
          muted
          autoPlay
          playsInline
          poster={showreelPosterSrc.src}
        >
          <source type="video/mp4" src={coverUi.data.attributes.url} />
        </video>
      </div>
    </div>
  );
};
