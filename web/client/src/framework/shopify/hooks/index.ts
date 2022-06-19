import { useAddToCart } from "./cart/use-add-to-cart";

export const shopifyApiHooks = {
  cart: {
    useAddToCart,
  },
};

export type ShopifyApiHandlersType = typeof shopifyApiHooks;
