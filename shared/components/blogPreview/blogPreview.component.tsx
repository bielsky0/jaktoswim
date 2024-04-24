import { BlogUI } from "@/shared/libs/strapiClient/strapiClient.types";
import Image from "next/image";
import Link from "next/link";

export interface BlogPreviewProps {
  blogUi: BlogUI;
}

export const BlogPreview = ({
  blogUi: { imageUrl, title, description, slug },
}: BlogPreviewProps) => {
  return (
    <div className="flex flex-col w-full  mb-5">
      <div className="mb-4 w-full aspect-[16/9] relative after:content group relative block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
        <Image
          alt="dasd"
          src={imageUrl}
          fill
          className="transform w-full h-full aspect-[16/9] rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 object-cover"
        />
      </div>

      <Link href={`/blog/${slug}`}>
        <div className="pb-3 max-w-full">
          <h3 className="font-bold text-2xl truncate">{title}</h3>
        </div>
        <div className="max-w-full truncate">
          <p className="text-base">{description}</p>
        </div>
      </Link>
    </div>
  );
};
