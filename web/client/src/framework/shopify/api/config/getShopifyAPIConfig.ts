import { APIConfig, fetchAPI } from "@api";
import { shopifyApiHooks } from "@framework/hooks";
import { API_URL } from "../../../../constants/api-url";

const shopifyConfig = new APIConfig({
  apiUrl: API_URL,
  apiFetch: fetchAPI,
  apiHooks: shopifyApiHooks,
});

export function getShopifyAPIConfig() {
  return shopifyConfig.getConfig();
}
