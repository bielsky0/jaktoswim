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
