import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@constants";
import Cookies from "js-cookie";

export const getCheckoutId = (): string =>
  Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE) ?? "";
