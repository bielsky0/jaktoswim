import {
  StrapiMedia,
  MultiStrapiMedia,
} from "@/shared/libs/strapiClient/strapiClient.types";

export type MediaUi = StrapiMedia;

export type MultiMediasUi = MultiStrapiMedia;

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
  }${path}`;
}

export const strapiMediaToUi = (strapiImg: StrapiMedia): MediaUi => {
  return {
    ...strapiImg,
    data: {
      ...strapiImg.data,
      attributes: {
        ...strapiImg.data.attributes,
        url: getStrapiURL(strapiImg.data.attributes.url),
        previewUrl: getStrapiURL(strapiImg.data.attributes.previewUrl || ""),
      },
    },
  };
};

export const strapiMultiImgtoUiMultiImg = (
  imgs: MultiStrapiMedia
): MultiMediasUi => {
  const img = imgs.data.map((strapiImg) => ({
    ...strapiImg,
    attributes: {
      ...strapiImg.attributes,
      url: getStrapiURL(strapiImg.attributes.url),
      previewUrl: getStrapiURL(strapiImg.attributes.previewUrl || ""),
    },
  }));
  return { data: img };
};
