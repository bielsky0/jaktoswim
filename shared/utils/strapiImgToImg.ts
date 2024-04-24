import {
  ImageStrapi,
  MultiImageStrapi,
} from "@/shared/libs/strapiClient/strapiClient.types";

export const strapiImgToImg = (strapiImg: ImageStrapi): ImageStrapi => {
  return {
    ...strapiImg,
    data: {
      ...strapiImg.data,
      attributes: {
        ...strapiImg.data.attributes,
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiImg.data.attributes.url}`,
        previewUrl: `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiImg.data.attributes.previewUrl}`,
      },
    },
  };
};

export const strapiMultiImgToMutliImg = (
  imgs: MultiImageStrapi
): MultiImageStrapi => {
  const img = imgs.data.map((strapiImg) => ({
    ...strapiImg,
    attributes: {
      ...strapiImg.attributes,
      url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiImg.attributes.url}`,
      previewUrl: `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiImg.attributes.previewUrl}`,
    },
  }));
  return { data: img };
};
