export const SHOPIFY_CHECKOUT_ID_COOKIE =
  process?.env?.NEXT_PUBLIC_FRAMEWORK === "shopify_local"
    ? "shopify_local_checkout_id"
    : "shopify_checkout_id";

export const SHOPIFY_CHECKOUT_URL_COOKIE = "shopify_checkoutUrl";
export const SHOPIFY_COOKIE_EXPIRE = 90;
