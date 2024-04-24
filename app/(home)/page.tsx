import {
  Billboard,
  FeatureHero,
  FeaturedAboutUs,
  FeaturedServices,
} from "@/app/(home)/_components";

import { FeaturedBlog, FeaturedReviews, Layout } from "@/shared/components";
import { getHomepage } from "../actions";

export default async function Home() {
  const homePageResponse = await getHomepage();
  const { billboard, hero, reviews, Services, aboutUs, blogs } =
    homePageResponse.data.attributes;

  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <Billboard billboard={billboard} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeatureHero hero={hero} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedReviews reviews={reviews} />
      </Layout>

      <Layout className="max-w-screen w-full bg-black rounded-2xl py-16">
        <FeaturedServices services={Services} />
      </Layout>

      <Layout className="py-8 md:py-24">
        <FeaturedAboutUs aboutUs={aboutUs} />
      </Layout>

      <Layout className="pb-8 md:pb-24">
        <FeaturedBlog blogs={blogs} />
      </Layout>
    </main>
  );
}
