import { FeaturedHero } from "@/app/blog/[slug]/_components";

type Params = {
  params: {
    slug: string;
  };
};

export default function Post({ params }: Params) {
  return (
    <main>
      <div>
        <FeaturedHero />
      </div>
    </main>
  );
}
