"use client";
import {
  Button,
  BlogPreview,
  Slider,
  TransitionLink,
} from "@/shared/components";
import { FeaturedBlogsSection } from "@/shared/libs/sanity/types";
import { ROUTES } from "@/shared/utils";

export interface FeaturedBlogProps {
  featuredBlogs: FeaturedBlogsSection;
}

export const FeaturedBlog = ({ featuredBlogs }: FeaturedBlogProps) => {
  const { subtitle, title, button_cta, featuredBlogs: blogs } = featuredBlogs;
  return (
    <div className="flex w-full flex-col lg:flex-row gap-8">
      <div className="flex flex-col ">
        <div className="flex gap-2 items-center pb-2">
          <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
          <span className="text-sm md:text-base">{subtitle}</span>
        </div>

        <div className="max-w-xl pb-3">
          <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
            {title}
          </h2>
        </div>

        <TransitionLink href={ROUTES.blog}>
          <Button>{button_cta}</Button>
        </TransitionLink>
      </div>

      <div className="overflow-hidden relative w-full | lg:w-12/16">
        <Slider
          items={blogs}
          renderItem={(blog) => (
            <div className="w-[300px] lg:w-[400px]">
              <BlogPreview blog={blog} />
            </div>
          )}
          keyExtractor={({ slug }) => slug.current}
        />
      </div>
    </div>
  );
};
