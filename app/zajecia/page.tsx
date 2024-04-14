import { FeaturedBlog, FeaturedReviews, Layout } from "@/shared/components";
import {
  FeaturedHero,
  FeaturedOffer,
  FeaturedFAQs,
} from "@/app/zajecia/_components";

export default function Home() {
  return (
    <main>
      <Layout className="py-8 md:py-16">
        <FeaturedHero />
      </Layout>

      <Layout className="py-16">
        <FeaturedOffer />
      </Layout>

      <Layout className="py-16">
        <FeaturedReviews />
      </Layout>

      <Layout className="py-16">
        <FeaturedFAQs />
      </Layout>

      <Layout className="py-16">
        <FeaturedBlog />
      </Layout>
    </main>
  );
}
