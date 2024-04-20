import { BlogList, FeaturedHero } from "@/app/blog/_components";
import { Layout } from "@/shared/components";

export default function Home() {
  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <BlogList />
      </Layout>
    </main>
  );
}
