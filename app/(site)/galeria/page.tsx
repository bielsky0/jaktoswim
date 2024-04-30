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
              className="pt-4 pb-12 md:py-12"
            >
              <SectionRenderer section={section} />
            </Layout>
          );

        return (
          <Layout key={`${section._type}-${idx}`} className="pb-8 md:pb-24">
            <SectionRenderer section={section} />
          </Layout>
        );
      })}
      <Layout className="py-8 md:py-16">
        <FeaturedGallery images={images} />
      </Layout>
    </main>
  );
}
