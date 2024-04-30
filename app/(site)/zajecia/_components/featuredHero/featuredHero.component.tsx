import { VideoPlayer2 } from "@/shared/components";
import { config } from "@/shared/libs/sanity/config";
import { VideoHeroSection } from "@/shared/libs/sanity/types";
import { getFileAsset } from "@sanity/asset-utils";

export interface FeaturedHeroProps {
  hero: VideoHeroSection;
}

export const FeaturedHero = ({ hero }: FeaturedHeroProps) => {
  const { title, description, coverVideo, subtitle } = hero;

  const coverUi = getFileAsset(coverVideo, config);

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
        <VideoPlayer2 src={coverUi.url} />
      </div>
    </div>
  );
};
