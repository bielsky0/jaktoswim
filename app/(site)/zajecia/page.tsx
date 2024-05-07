import { Layout } from "@/shared/components";
import { getPage } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/app/(site)/zajecia/_components";

export default async function Offer() {
  const classes = await getPage("Classes");

  if (!classes) return notFound();

  const { pageBuilder } = classes;

  return (
    <main>
      {pageBuilder.map((section, idx) => {
        if (section._type === "videoHero")
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
