import { BlogList, FeaturedHero } from "@/app/blog/_components";
import { Layout } from "@/shared/components";

export default function Home() {
  return (
    <main>
      <Layout className="py-16">
        <FeaturedHero />
      </Layout>

      <Layout className="py-16">
        <BlogList />
      </Layout>
    </main>
  );
}
