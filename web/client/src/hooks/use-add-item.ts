import { useAPIHookManager } from "@hooks/use-api-hook-manager";
import { ShopifyApiHandlersType } from "../framework/shopify/hooks";

// return apiHooks.cartAPI.useAPIHook();
export const useAddItem = () => {
  const hook = useAPIHookManager<ShopifyApiHandlersType>((apiHooks) => {
    return apiHooks.cart.useAddToCart;
  });

  return hook.useAPIHook({ fetchAPI: hook.fetchAPI });
};
