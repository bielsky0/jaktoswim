import { Layout } from "@/shared/components";
import { getBlogs } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";
import { BlogList, SectionRenderer } from "@/app/(site)/blog/_components";

export default async function Blog() {
  const { blogPage, blogs } = await getBlogs();

  if (!blogPage || !blogs) return notFound();
  const { pageBuilder } = blogPage;

  return (
    <main>
      {pageBuilder.map((section) => {
        if (section._type === "hero")
          return (
            <Layout className="pt-4 pb-12 md:py-12">
              <SectionRenderer section={section} />
            </Layout>
          );

        return (
          <Layout className="pb-8 md:pb-24">
            <SectionRenderer section={section} />
          </Layout>
        );
      })}
      <Layout className="pb-8 md:pb-24">
        <BlogList blogPosts={blogs} />
      </Layout>
    </main>
  );
}
