import { Layout } from "@/shared/components";
import { FeaturedHero, Contact } from "@/app/kontakt/_components";

export default function Home() {
  return (
    <main>
      <Layout className="py-16">
        <FeaturedHero />
      </Layout>

      <Layout className="py-16">
        <Contact />
      </Layout>
    </main>
  );
}
