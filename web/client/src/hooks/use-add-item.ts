import { useAPIHookManager } from "@hooks/use-api-hook-manager";
import { ShopifyApiHandlersType } from "../framework/shopify/hooks";
import { useAPIMutationManager } from "./use-api-mutation-manager";

// return apiHooks.cartAPI.useAPIHook();
export const useAddItem = () => {
  const apiHook = useAPIHookManager<ShopifyApiHandlersType>((apiHooks) => {
    return apiHooks.cart.useAddToCart;
  });

  return useAPIMutationManager(apiHook);
};
