import { getBlogPost } from "@/app/actions";
import { FeaturedBlogBody, FeaturedHero } from "@/app/blog/[slug]/_components";
import { FeaturedBlog, Layout } from "@/shared/components";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export const revalidate = 1;

export default async function Post({ params }: Params) {
  const blog = await getBlogPost({ id: params.slug });
  if (!blog) return notFound();

  const blogUi = blogPostMapper({
    blog: blog.data.attributes.Blog,
    slug: blog.data.attributes.slug,
  });

  const featuredBlogs = blog.data.attributes.Blog.blog_posts.data.map(
    (relatedBlogs) =>
      blogPostMapper({
        blog: relatedBlogs.attributes.Blog,
        slug: relatedBlogs.attributes.slug,
      })
  );

  return (
    <main>
      <FeaturedHero blogUi={blogUi} />

      <FeaturedBlogBody blogUi={blogUi} />

      <Layout className="py-8">
        <FeaturedBlog
          blogs={featuredBlogs}
          title="Najświeższe informacje, prosto z wody"
          subtitle=" Nasz Blog"
          button_cta="Zobacz Wszystkie Nowości!"
        />
      </Layout>
    </main>
  );
}
