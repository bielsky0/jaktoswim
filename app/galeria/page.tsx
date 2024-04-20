import { Layout } from "@/shared/components";
import { FeaturedGallery, FeaturedHero } from "@/app/galeria/_components";

export default function Galeria() {
  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero />
      </Layout>

      <Layout className="py-8 md:py-16">
        <FeaturedGallery />
      </Layout>
    </main>
  );
}
