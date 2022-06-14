import { APIConfig, fetchAPI } from "@api";
import * as frameworkHooks from "@framework/hooks";

const shopifyConfig = new APIConfig({
  apiUrl: "http://localhost:4000/graphql",
  apiFetch: fetchAPI,
  apiHooks: frameworkHooks,
});

export function getShopifyAPIConfig() {
  return shopifyConfig.getConfig();
}
