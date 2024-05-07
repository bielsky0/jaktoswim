"use client";

import { ContentRenderer } from "@/shared/components";
import { Blog } from "@/shared/libs/sanity/types";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

export interface FeaturedBlogProps {
  blog: Blog;
}

export const FeaturedBlogBody = ({ blog }: FeaturedBlogProps) => {
  const { content, _createdAt } = blog;
  return (
    <div className="w-full py-0">
      <div className="px-2 | sm:px-6 | xl:px-12 | 2xl:px-20 | 3xl:px-40 | 4xl:px-60">
        <div className="w-full flex flex-col items-start | lg:flex-row lg:items-stretch">
          <div className="px-2 | lg:px-3 | xl:px-4 w-full mb-10 | lg:mb-0 lg:max-w-sm | 4xl:max-w-lg">
            5 minut czytania
          </div>

          <div className="px-2 | lg:px-3 | xl:px-4 w-full | lg:w-10/16 | 4xl:w-9/16 || js-content">
            <div className="flex w-full pb-3">
              <div className="flex font-light bg-gray-50 rounded-full py-1 px-4 ">
                Napisane {new Date(_createdAt).toLocaleDateString()}
              </div>
            </div>
            <div className="w-full flex flex-col ">
              <ContentRenderer content={content} />
            </div>
          </div>

          <div className="px-2 | lg:px-3 | xl:px-4 flex-shrink-0 w-auto hidden |  lg:flex flex-col items-center gap-2">
            <div>Udostępnij</div>

            <div className="flex flex-col justify-center items-center gap-2">
              <FacebookShareButton
                url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug.current}`}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug.current}`}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
