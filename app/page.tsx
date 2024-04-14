import {
  Billboard,
  FeaturedAboutUs,
  FeaturedBlog,
  FeaturedServices,
  FeaturedWork,
  Layout,
} from "@/shared/components";

export default function Home() {
  return (
    <main>
      <Layout className="py-8 md:py-16">
        <Billboard />
      </Layout>

      <Layout className="py-16">
        <FeaturedWork />
      </Layout>

      <Layout className="max-w-screen w-full bg-[#1E1E1E] py-16">
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
