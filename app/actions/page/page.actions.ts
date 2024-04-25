import { strapiClient } from "@/shared/libs";
import { unstable_cache } from "next/cache";

export const getHomepage = unstable_cache(
  async () => {
    const homepage = await strapiClient.getHomePage();

    return homepage;
  },
  ["homepage"],
  { revalidate: 3600 }
);

export const getAboutUsPage = unstable_cache(
  async () => {
    const aboutUsPage = await strapiClient.getAboutUsPage();

    return aboutUsPage;
  },
  ["aboutUsPage"],
  { revalidate: 3600 }
);

export const getOfferPage = unstable_cache(
  async () => {
    const offerPage = await strapiClient.getOfferPage();

    return offerPage;
  },
  ["offerPage"],
  { revalidate: 3600 }
);

export const getBlogPage = unstable_cache(
  async () => {
    const blogPage = await strapiClient.getBlogPage();

    return blogPage;
  },
  ["blogPage"],
  { revalidate: 3600 }
);

export const getGalleryPage = unstable_cache(
  async () => {
    const galleryPage = await strapiClient.getGalleryPage();

    return galleryPage;
  },
  ["galleryPage"],
  { revalidate: 3600 }
);
