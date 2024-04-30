import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { HttpMethod } from "./types";

export class AxiosService {
  private http: AxiosInstance;

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL: baseURL,
      withCredentials: false,
    });
    this.injectInterceptors();
  }

  public async get<T>(
    url: string,
    params?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(HttpMethod.GET, url, {
      params,
    });
  }

  private async request<T>(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  private injectInterceptors() {
    this.http.interceptors.request.use((request) => {
      return request;
    });

    this.http.interceptors.response.use(
      (response) => {
        return response;
      },

      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private normalizeError(error: any) {
    return Promise.reject(error);
  }
}
