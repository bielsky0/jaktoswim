import { FeaturedBlog, FeaturedReviews, Layout } from "@/shared/components";
import {
  FeaturedHero,
  FeaturedOffer,
  FeaturedFAQs,
} from "@/app/zajecia/_components";

export default function Home() {
  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedOffer />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedReviews />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedFAQs />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedBlog />
      </Layout>
    </main>
  );
}
