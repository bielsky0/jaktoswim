import { BlogPreview } from "@/shared/components";
import { Blog } from "@/shared/libs/sanity/types/blog.types";

export interface BlogListProps {
  blogPosts: Blog[];
}

export const BlogList = ({ blogPosts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 ">
      {blogPosts.map((blog) => (
        <BlogPreview key={blog.slug.current} blog={blog} />
      ))}
    </div>
  );
};
