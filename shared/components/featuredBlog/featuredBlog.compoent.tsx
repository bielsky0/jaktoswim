"use client";
import { Button, BlogPreview, Slider } from "@/shared/components";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";
import {
  BlogUI,
  BlogsSection,
} from "@/shared/libs/strapiClient/strapiClient.types";

export interface FeaturedBlogProps {
  title: string;
  subtitle: string;
  button_cta: string;
  blogs: BlogUI[];
}

export const FeaturedBlog = ({
  blogs,
  title,
  subtitle,
  button_cta,
}: FeaturedBlogProps) => {
  return (
    <div className="flex w-full flex-col lg:flex-row gap-8">
      <div className="flex flex-col ">
        <div className="flex gap-2 items-center pb-2">
          <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
          <h5 className="text-sm md:text-base">{subtitle}</h5>
        </div>

        <div className="max-w-xl pb-3">
          <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
            {title}
          </h2>
        </div>

        <div>
          <Button href="/blog">{button_cta}</Button>
        </div>
      </div>

      <div className="overflow-hidden relative w-full | lg:w-12/16">
        <Slider
          items={blogs}
          renderItem={(blogUi) => (
            <div className="w-[300px] lg:w-[400px]">
              <BlogPreview blogUi={blogUi} />
            </div>
          )}
          keyExtractor={({ slug }) => slug}
        />
      </div>
    </div>
  );
};
