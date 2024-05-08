import { Layout } from "@/shared/components";
import { SectionRenderer } from "@/app/(site)/kontakt/_components";
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
              className="max-w-screen w-full px-0 md:px-0 lg:px-0"
              key={`${section._type}-${idx}`}
            >
              <Layout className="pt-4 pb-12 md:py-12">
                <SectionRenderer section={section} />
              </Layout>
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
          <Layout
            className="max-w-screen w-full px-0 md:px-0 lg:px-0"
            key={`${section._type}-${idx}`}
          >
            <Layout className="pb-8 md:pb-24">
              <SectionRenderer section={section} />
            </Layout>
          </Layout>
        );
      })}
    </main>
  );
}
