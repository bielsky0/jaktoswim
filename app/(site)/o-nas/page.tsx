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
      {pageBuilder.map((section) => {
        if (section._type === "imageCarousel")
          return (
            <div className="py-8 md:py-16">
              <SectionRenderer section={section} />
            </div>
          );

        if (section._type === "marquee")
          return <SectionRenderer section={section} />;
        return (
          <Layout className="pb-8 md:pb-24">
            <SectionRenderer section={section} />
          </Layout>
        );
      })}
    </main>
  );
}
