"use client";
import { Button, BlogPreview, Slider } from "@/shared/components";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";
import { BlogsSection } from "@/shared/libs/strapiClient/strapiClient.types";

export interface FeaturedBlogProps {
  blogs: BlogsSection;
}

export const FeaturedBlog = ({ blogs }: FeaturedBlogProps) => {
  const blogPosts = blogs.blog_posts.data.map((blog) =>
    blogPostMapper({ blog: blog.attributes.Blog, slug: blog.attributes.slug })
  );
  return (
    <div className="flex w-full flex-col lg:flex-row gap-8">
      <div className="flex flex-col ">
        <div className="flex gap-2 items-center pb-2">
          <div className="h-[8px] w-[8px] bg-black rounded-full"></div>
          <h5 className="text-sm md:text-base">Nasz Blog</h5>
        </div>

        <div className="max-w-xl pb-3">
          <h2 className="ibmPlex text-2xl md:text-4xl font-semibold">
            Najświeższe informacje, prosto z wody
          </h2>
        </div>

        <div>
          <Button>Zobacz Wszystkie Nowości</Button>
        </div>
      </div>

      <div className="overflow-hidden relative w-full | lg:w-12/16">
        <Slider
          items={blogPosts}
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
