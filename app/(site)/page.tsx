import { Layout } from "@/shared/components";

import { getPage } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/app/(site)/_components";

export default async function Home() {
  const home = await getPage("Home");

  if (!home) return notFound();

  const { pageBuilder } = home;

  return (
    <main>
      {pageBuilder.map((section, idx) => {
        if (section._type === "billboard")
          return (
            <Layout
              key={`${section._type}-${idx}`}
              className="pt-4 pb-12 md:py-12"
            >
              <SectionRenderer section={section} />
            </Layout>
          );

        if (section._type === "services")
          return (
            <Layout
              key={`${section._type}-${idx}`}
              className="max-w-screen w-full bg-black rounded-2xl py-16"
            >
              <SectionRenderer section={section} />
            </Layout>
          );

        if (section._type === "hero")
          return (
            <Layout
              key={`${section._type}-${idx}`}
              className="py-8 md:pb-16  pt-96"
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
