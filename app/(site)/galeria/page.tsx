import { Layout } from "@/shared/components";

import { getGalleries } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";
import {
  FeaturedGallery,
  SectionRenderer,
} from "@/app/(site)/galeria/_components";

export default async function Gallery() {
  const { images, galleryPage } = await getGalleries();
  if (!galleryPage || !images) return notFound();
  const { pageBuilder } = galleryPage;

  return (
    <main>
      {pageBuilder.map((section, idx) => {
        if (section._type === "hero")
          return (
            <Layout
              key={`${section._type}-${idx}`}
              className="max-w-screen w-full px-0 md:px-0 lg:px-0"
            >
              <Layout className="pt-4 pb-12 md:py-12">
                <SectionRenderer section={section} />
              </Layout>
            </Layout>
          );

        return (
          <Layout
            key={`${section._type}-${idx}`}
            className="max-w-screen w-full px-0 md:px-0 lg:px-0"
          >
            <Layout className="pb-8 md:pb-24">
              <SectionRenderer section={section} />
            </Layout>
          </Layout>
        );
      })}

      <Layout className="max-w-screen w-full px-0 md:px-0 lg:px-0">
        <Layout className="py-8 md:py-16">
          <FeaturedGallery images={images} />
        </Layout>
      </Layout>
    </main>
  );
}
