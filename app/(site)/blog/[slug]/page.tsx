import { FeaturedBlog, Layout } from "@/shared/components";
import { getBlog } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";
import { FeaturedBlogBody, FeaturedHero } from "./_components";

type Params = {
  params: {
    slug: string;
  };
};

export const revalidate = 1;

export default async function Post({ params }: Params) {
  const blog = await getBlog(params.slug);

  if (!blog) return notFound();

  return (
    <main>
      <FeaturedHero blog={blog} />

      <FeaturedBlogBody blog={blog} />

      <Layout className="py-8">
        <FeaturedBlog
          featuredBlogs={{
            _type: "featuredBlogs",
            title: "To Może Ci Się Spodobać",
            button_cta: "Zobacz Więcej Nowości!",
            subtitle: "Podobne Wpisy",
            featuredBlogs: blog.featuredBlogs,
          }}
        />
      </Layout>

      {/* <FeaturedHero blogUi={blogUi} />

      <FeaturedBlogBody blogUi={blogUi} />

      <Layout className="py-8">
        <FeaturedBlog
          blogs={featuredBlogs}
          title="Najświeższe informacje, prosto z wody"
          subtitle=" Nasz Blog"
          button_cta="Zobacz Wszystkie Nowości!"
        />
      </Layout> */}
    </main>
  );
}
