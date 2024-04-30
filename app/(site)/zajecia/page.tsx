import { Layout } from "@/shared/components";
import { getPage } from "@/shared/libs/sanity/client";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/app/(site)/zajecia/_components";

export default async function Offer() {
  const classes = await getPage("Classes");

  if (!classes) return notFound();

  const { pageBuilder } = classes;

  console.log(pageBuilder[3]);
  return (
    <main>
      {pageBuilder.map((section) => {
        if (section._type === "videoHero")
          return (
            <Layout className="pt-4 pb-12 md:py-12">
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
      {/* <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero hero={hero} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedOffer services={services} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedReviews reviews={reviews} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedFAQs faqs={faqs} />
      </Layout>

      <Marquee />

      <Layout className="pb-8 md:pb-24">
        <FeaturedBlog
          title={blogsTitle}
          subtitle={blogsSubtitle}
          blogs={blogsUi}
          button_cta={blogsButtonCta}
        />
      </Layout> */}
    </main>
  );
}
