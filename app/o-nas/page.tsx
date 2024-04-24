import { FeaturedBlog, FeaturedReviews, Layout } from "@/shared/components";
import {
  FeaturedHero,
  FeaturedAboutUs,
  FeaturedCoach,
} from "@/app/o-nas/_components";
import { getAboutUsPage } from "../actions";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";

export default async function AboutUs() {
  const aboutUsResponse = await getAboutUsPage();

  const { hero, aboutUs, instructor, reviews, blogs } =
    aboutUsResponse.data.attributes;

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
      <Layout className="py-8 md:py-16">
        <FeaturedHero hero={hero} />
      </Layout>

      <Layout className="pt-8 md:pt-16">
        <FeaturedAboutUs aboutUs={aboutUs} />
      </Layout>

      <Layout className="py-8 md:py-16">
        <FeaturedCoach instructor={instructor} />
      </Layout>

      <Layout className="pt-16">
        <FeaturedReviews reviews={reviews} />
      </Layout>

      <Layout className="py-16">
        <FeaturedBlog
          blogs={blogsUi}
          title={blogsTitle}
          subtitle={blogsSubtitle}
          button_cta={blogsButtonCta}
        />
      </Layout>
    </main>
  );
}
