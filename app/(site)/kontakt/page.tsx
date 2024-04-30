import { Layout, Marquee } from "@/shared/components";
import {
  FeaturedHero,
  SectionRenderer,
} from "@/app/(site)/kontakt/_components";
import { FeaturedFAQs } from "../zajecia/_components";
import { getPage } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";

export default async function Contact() {
  const contactResponse = await getPage("Contact");

  if (!contactResponse) return notFound();

  const { pageBuilder } = contactResponse;
  return (
    <main>
      {pageBuilder.map((section) => {
        if (section._type === "contact")
          return (
            <Layout className="pt-4 pb-12 md:py-12">
              <SectionRenderer section={section} />
            </Layout>
          );

        if (section._type === "marquee")
          return <SectionRenderer section={section} />;
        return (
          <Layout className="pb-8 md:pb-24">
            <SectionRenderer section={section} />
          </Layout>
        );
      })}
      {/* <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero hero={hero} />
      </Layout>

      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedFAQs faqs={faqs} />
      </Layout>
      <Marquee /> */}
    </main>
  );
}
