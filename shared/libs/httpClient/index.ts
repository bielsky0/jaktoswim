import { AxiosService } from "./httpClient";

export const axiosClient = new AxiosService(
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`
);
