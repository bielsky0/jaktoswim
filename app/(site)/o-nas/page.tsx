import { getPage } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";
import { Layout } from "@/shared/components";
import { SectionRenderer } from "@/app/(site)/o-nas/_components";

export default async function AboutUs() {
  const aboutUsResponse = await getPage("About Us");

  if (!aboutUsResponse) return notFound();
  const { pageBuilder } = aboutUsResponse;

  return (
    <main>
      {pageBuilder.map((section, idx) => {
        if (section._type === "imageCarousel")
          return (
            <Layout key={`${section._type}-${idx}`} className="py-8 md:py-16">
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
