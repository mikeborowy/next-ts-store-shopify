import { APIConfig, fetchAPI } from "@api";
import { shopifyApiHooks } from "@framework/hooks";

const shopifyConfig = new APIConfig({
  apiUrl: "http://localhost:4000/graphql",
  apiFetch: fetchAPI,
  apiHooks: shopifyApiHooks,
});

export function getShopifyAPIConfig() {
  return shopifyConfig.getConfig();
}
