import { BlogPreview } from "@/shared/components";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";
import { Blog } from "@/shared/libs/strapiClient/strapiClient.types";

export interface BlogListProps {
  blogPosts: Blog[];
}

export const BlogList = ({ blogPosts }: BlogListProps) => {
  return (
    <div className="columns-1 gap-8 sm:columns-2 md:columns-3">
      {blogPosts.map((blog) => (
        <BlogPreview key={blog.id} blogUi={blogPostMapper(blog)} />
      ))}
    </div>
  );
};
