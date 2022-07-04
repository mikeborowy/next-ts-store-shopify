import { APIFetchOptions, APIFetchResults } from "../helpers";

export type APIHooksType = Record<string, unknown>;

export type APIFetchType<T = unknown> = (
  options: APIFetchOptions
) => Promise<APIFetchResults<T>>;

export interface APIConfigType {
  apiFetch: APIFetchType;
  apiHooks: APIHooksType;
  checkoutCookie: string;
}

export class APIConfig {
  private config: APIConfigType;

  constructor(config: APIConfigType) {
    this.config = config;
  }

  getConfig(): APIConfigType {
    return this.config;
  }
}
