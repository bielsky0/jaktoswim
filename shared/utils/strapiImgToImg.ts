import { ImageStrapi } from "@/shared/libs/strapiClient/strapiClient.types";

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
