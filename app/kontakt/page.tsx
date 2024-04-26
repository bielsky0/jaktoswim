import { Layout, Marquee } from "@/shared/components";
import { FeaturedHero } from "@/app/kontakt/_components";
import { getContactPage } from "../actions";
import { FeaturedFAQs } from "../zajecia/_components";

export default async function Contact() {
  const contactResponse = await getContactPage();

  const { hero, faqs } = contactResponse.data.attributes;

  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero hero={hero} />
      </Layout>

      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedFAQs faqs={faqs} />
      </Layout>
      <Marquee />
    </main>
  );
}
