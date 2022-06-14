import { useAddToCartHandlers } from "./cart/use-add-to-cart";

export const apiHandlers = {
  cart: {
    useAddToCartHandlers,
  },
};

export type APIHandlersType = typeof apiHandlers;
