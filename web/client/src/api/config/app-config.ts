import { APIFetchOptions, APIFetchResults } from "../helpers";

export interface APIConfigType {
  apiUrl: string;
  fetch<T>(options: APIFetchOptions): Promise<APIFetchResults<T>>;
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
