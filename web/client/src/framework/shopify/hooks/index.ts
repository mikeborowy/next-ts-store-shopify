import { useCartAddHandler as useCartAdd } from "./cart-handlers/use-cart-add-handler";
import { useCartHandler as useCart } from "./cart-handlers/use-cart-handler";
import { useCartRemoveHandler as useCartRemove } from "./cart-handlers/use-cart-remove-handler";
import { useCartUpdateHandler as useCartUpdate } from "./cart-handlers/use-cart-update-handler";

export const shopifyApiHooks = {
  cart: {
    useCart,
    useCartAdd,
    useCartRemove,
    useCartUpdate,
  },
};

export type ShopifyApiHandlersType = typeof shopifyApiHooks;
