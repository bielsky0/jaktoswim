import {
  Billboard,
  FeatureHero,
  FeaturedAboutUs,
  FeaturedBlog,
  FeaturedServices,
  Layout,
} from "@/shared/components";

export default function Home() {
  return (
    <main>
      <Layout className="py-8 md:py-16">
        <Billboard />
      </Layout>

      <Layout className="py-16">
        <FeatureHero />
      </Layout>

      <Layout className="max-w-screen w-full bg-black rounded-2xl py-16">
        <FeaturedServices />
      </Layout>

      <Layout className="py-16">
        <FeaturedAboutUs />
      </Layout>

      <Layout className="py-16">
        <FeaturedBlog />
      </Layout>
    </main>
  );
}
