import { APIConfig, fetchAPI } from "@api";

const configWrapper = new APIConfig({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchAPI,
});

export function getShopifyAPIConfig() {
  return configWrapper.getConfig();
}
