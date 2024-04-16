import {
  Billboard,
  FeatureHero,
  FeaturedAboutUs,
  FeaturedServices,
} from "@/app/(home)/_components";

import { FeaturedBlog, FeaturedReviews, Layout } from "@/shared/components";

export default function Home() {
  return (
    <main>
      <Layout className="py-8 md:py-12">
        <Billboard />
      </Layout>

      <Layout className="py-12">
        <FeatureHero />
      </Layout>

      <Layout className="py-12">
        <FeaturedReviews />
      </Layout>

      <Layout className="max-w-screen w-full bg-black rounded-2xl py-12">
        <FeaturedServices />
      </Layout>

      <Layout className="py-12">
        <FeaturedAboutUs />
      </Layout>

      <Layout className="py-12">
        <FeaturedBlog />
      </Layout>
    </main>
  );
}
