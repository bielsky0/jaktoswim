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
      {pageBuilder.map((section, idx) => {
        if (section._type === "hero")
          return (
            <Layout
              className="max-w-screen w-full px-0 md:px-0 lg:px-0"
              key={`${section._type}-${idx}`}
            >
              <Layout
                key={`${section._type}-${idx}`}
                className="pt-4 pb-12 md:py-12"
              >
                <SectionRenderer section={section} />
              </Layout>
            </Layout>
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
      <Layout className="max-w-screen w-full px-0 md:px-0 lg:px-0">
        <Layout className="pb-8 md:pb-24">
          <BlogList blogPosts={blogs} />
        </Layout>
      </Layout>
    </main>
  );
}
