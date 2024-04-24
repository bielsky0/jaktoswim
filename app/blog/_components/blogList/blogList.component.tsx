import { BlogPreview } from "@/shared/components";
import { BlogUI } from "@/shared/libs/strapiClient/strapiClient.types";

export interface BlogListProps {
  blogPosts: BlogUI[];
}

export const BlogList = ({ blogPosts }: BlogListProps) => {
  return (
    <div className="columns-1 gap-8 sm:columns-2 md:columns-3">
      {blogPosts.map((blog) => (
        <BlogPreview key={blog.slug} blogUi={blog} />
      ))}
    </div>
  );
};
