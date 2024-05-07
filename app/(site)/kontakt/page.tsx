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
      {pageBuilder.map((section, idx) => {
        if (section._type === "contact")
          return (
            <Layout
              key={`${section._type}-${idx}`}
              className="pt-4 pb-12 md:py-12"
            >
              <SectionRenderer section={section} />
            </Layout>
          );

        if (section._type === "marquee")
          return (
            <SectionRenderer
              key={`${section._type}-${idx}`}
              section={section}
            />
          );
        return (
          <Layout key={`${section._type}-${idx}`} className="pb-8 md:pb-24">
            <SectionRenderer section={section} />
          </Layout>
        );
      })}
    </main>
  );
}
