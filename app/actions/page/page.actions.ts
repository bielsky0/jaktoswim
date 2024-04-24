import { strapiClient } from "@/shared/libs";
import { unstable_cache } from "next/cache";

export const getHomepage = unstable_cache(
  async () => {
    const homepage = await strapiClient.getHomePage();

    return homepage;
  },
  ["homepage"],
  { revalidate: 1 }
);

export const getAboutUsPage = unstable_cache(
  async () => {
    const aboutUsPage = await strapiClient.getAboutUsPage();

    return aboutUsPage;
  },
  ["aboutUsPage"],
  { revalidate: 1 }
);

export const getOfferPage = unstable_cache(
  async () => {
    const offerPage = await strapiClient.getOfferPage();

    return offerPage;
  },
  ["offerPage"],
  { revalidate: 1 }
);
