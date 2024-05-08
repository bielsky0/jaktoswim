import { config } from "@/shared/libs/sanity/config";
import { GalleryImage } from "@/shared/libs/sanity/types/gallery.types";
import { getImageAsset } from "@sanity/asset-utils";
import Image from "next/image";

export interface FeaturedGalleryProps {
  images: GalleryImage[];
}

export const FeaturedGallery = ({ images }: FeaturedGalleryProps) => {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      {images.map(({ coverImage }) => {
        return (
          <div
            key={coverImage.asset.url}
            className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              alt={
                coverImage.alt ||
                "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
              }
              width={720}
              height={480}
              placeholder="blur"
              blurDataURL={coverImage.asset.metadata.lqip}
              loading="lazy"
              src={coverImage.asset.url}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            />
          </div>
        );
      })}
    </div>
  );
};
