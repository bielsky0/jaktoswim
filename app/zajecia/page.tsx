import { FeaturedBlog, FeaturedReviews, Layout } from "@/shared/components";
import {
  FeaturedHero,
  FeaturedOffer,
  FeaturedFAQs,
} from "@/app/zajecia/_components";
import { getOfferPage } from "../actions";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";

export default async function Offer() {
  const offerPageReponse = await getOfferPage();

  const { hero, services, reviews, blogs } = offerPageReponse.data.attributes;
  const {
    title: blogsTitle,
    subtitle: blogsSubtitle,
    button_cta: blogsButtonCta,
  } = blogs;

  const blogsUi = blogs.blog_posts.data.map((blog) =>
    blogPostMapper({ blog: blog.attributes.Blog, slug: blog.attributes.slug })
  );

  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero hero={hero} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedOffer services={services} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedReviews reviews={reviews} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedFAQs />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedBlog
          title={blogsTitle}
          subtitle={blogsSubtitle}
          blogs={blogsUi}
          button_cta={blogsButtonCta}
        />
      </Layout>
    </main>
  );
}
