import { config } from "@/shared/libs/sanity/config";
import { Blog } from "@/shared/libs/sanity/types/blog.types";
import { getImageAsset } from "@sanity/asset-utils";
import Image from "next/image";
import Link from "next/link";
import { TransitionLink } from "../transitionLink";

export interface BlogPreviewProps {
  blog: Blog;
}

export const BlogPreview = ({
  blog: { coverImage, title, description, slug },
}: BlogPreviewProps) => {
  return (
    <div className="flex flex-col w-full  mb-5">
      <div className="mb-4 w-full aspect-[16/9] relative after:content group relative block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          src={coverImage.asset.url}
          width={1280}
          height={500}
          placeholder="blur"
          loading="lazy"
          alt={
            coverImage.alt ||
            "nauka pływania dla dorosłych szczecin, nauka pływania dla dzieci szczecin"
          }
          blurDataURL={coverImage.asset.metadata.lqip}
          className="transform w-full h-full aspect-[16/9] rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 object-cover"
        />
      </div>

      <TransitionLink href={`/blog/${slug.current}`}>
        <div className="pb-3 max-w-full">
          <h3 className="font-bold text-2xl truncate">{title}</h3>
        </div>
        <div className="max-w-full truncate">
          <p className="text-base">{description}</p>
        </div>
      </TransitionLink>
    </div>
  );
};
