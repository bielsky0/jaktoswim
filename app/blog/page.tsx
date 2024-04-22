import { BlogList, FeaturedHero } from "@/app/blog/_components";
import { Layout } from "@/shared/components";
import { getBlogPosts } from "@/app/actions";

export default async function Home() {
  const blogPostsData = await getBlogPosts();
  const blogPostsUi = blogPostsData.data;
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
