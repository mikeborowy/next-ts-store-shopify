import { APIConfig, fetchAPI } from "@api";
import { shopifyApiHooks } from "@shopify/hooks";
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "../../../../constants";

const shopifyConfig = new APIConfig({
  apiFetch: fetchAPI,
  apiHooks: shopifyApiHooks,
  checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE,
});

export function getShopifyAPIConfig() {
  return shopifyConfig.getConfig();
}
