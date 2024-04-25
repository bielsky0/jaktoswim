import { Layout } from "@/shared/components";
import { FeaturedGallery, FeaturedHero } from "@/app/galeria/_components";
import { getGalleryPage, getImages } from "@/app/actions";
import { strapiMediaToUi } from "@/shared/utils";

export default async function Gallery() {
  const galleryResponse = await getGalleryPage();
  const imagesResponse = await getImages();

  const { hero } = galleryResponse.data.attributes;

  const images = imagesResponse.data.map(({ attributes }) =>
    strapiMediaToUi(attributes.image)
  );

  return (
    <main>
      <Layout className="pt-4 pb-12 md:py-12">
        <FeaturedHero hero={hero} />
      </Layout>

      <Layout className="py-8 md:py-16">
        <FeaturedGallery images={images} />
      </Layout>
    </main>
  );
}
