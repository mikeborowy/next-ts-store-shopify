import { normalizeCart } from "@shopify/helpers";
import { Checkout, Maybe } from "@shopify/models";

export const normalizeCheckout = (checkout?: Maybe<Checkout>) => {
  if (!checkout) {
    throw new Error("Missing checkout object!");
  }

  return normalizeCart(checkout);
};
