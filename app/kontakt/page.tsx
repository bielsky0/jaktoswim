import { Layout } from "@/shared/components";
import { FeaturedHero, Contact } from "@/app/kontakt/_components";

export default function Home() {
  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <Contact />
      </Layout>
    </main>
  );
}
