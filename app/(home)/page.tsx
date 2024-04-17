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
      <Layout className="pt-4 pb-12 md:py-12">
        <Billboard />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeatureHero />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedReviews />
      </Layout>

      <Layout className="max-w-screen w-full bg-black rounded-2xl py-16">
        <FeaturedServices />
      </Layout>

      <Layout className="py-8 md:py-24">
        <FeaturedAboutUs />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedBlog />
      </Layout>
    </main>
  );
}
