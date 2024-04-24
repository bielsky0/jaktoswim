import { BlogList, FeaturedHero } from "@/app/blog/_components";
import { Layout } from "@/shared/components";
import { getBlogPosts } from "@/app/actions";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";

export default async function Home() {
  const blogPostsData = await getBlogPosts();
  const blogPostsUi = blogPostsData.data.map((blog) =>
    blogPostMapper({
      blog: blog.attributes.Blog,
      slug: blog.attributes.slug,
    })
  );

  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <BlogList blogPosts={blogPostsUi} />
      </Layout>
    </main>
  );
}
