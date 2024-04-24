"use server";

import { strapiClient } from "@/shared/libs";

import { unstable_cache } from "next/cache";

export const getImages = unstable_cache(
  async () => {
    const images = await strapiClient.getImages();

    return images;
  },
  ["images"],
  { revalidate: 1 }
);
