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
      {pageBuilder.map((section) => {
        if (section._type === "billboard")
          return (
            <Layout className="pt-4 pb-12 md:py-12">
              <SectionRenderer section={section} />
            </Layout>
          );

        if (section._type === "services")
          return (
            <Layout className="max-w-screen w-full bg-black rounded-2xl py-16">
              <SectionRenderer section={section} />
            </Layout>
          );

        if (section._type === "hero")
          return (
            <Layout className="py-8 md:pb-16  pt-96">
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
    </main>
  );
}
