import { FeaturedBlog, FeaturedReviews, Layout } from "@/shared/components";
import {
  FeaturedHero,
  FeaturedAboutUs,
  FeaturedCoach,
} from "@/app/o-nas/_components";

export default function Home() {
  return (
    <main>
      <Layout className="py-8 md:py-16">
        <FeaturedHero />
      </Layout>

      <Layout className="pt-8 md:pt-16">
        <FeaturedAboutUs />
      </Layout>

      <Layout className="py-8 md:py-16">
        <FeaturedCoach />
      </Layout>

      <Layout className="pt-16">
        <FeaturedReviews />
      </Layout>

      <Layout className="py-16">
        <FeaturedBlog />
      </Layout>
    </main>
  );
}
