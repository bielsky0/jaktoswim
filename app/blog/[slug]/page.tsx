import { getBlogPost } from "@/app/actions";
import { FeaturedBlogBody, FeaturedHero } from "@/app/blog/[slug]/_components";
import { blogPostMapper } from "@/shared/libs/strapiClient/strapiClient.mapper";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const blog = await getBlogPost({ id: params.slug });

  const blogUi = blogPostMapper(blog.data);

  return (
    <main>
      <FeaturedHero blogUi={blogUi} />

      <FeaturedBlogBody blogUi={blogUi} />
    </main>
  );
}
