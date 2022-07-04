import {
  APIHookMutationType,
  useAPIHookManager,
  useAPIMutationManager,
} from "@api";
import { ShopifyApiHandlersType } from "@shopify/hooks";

export type UseCartUpdateItemType<
  T extends APIHookMutationType = APIHookMutationType<any>
> = ReturnType<T["useAPIHook"]>;

// return apiHooks.cartAPI.useAPIHook();
export const useCartUpdateItem: UseCartUpdateItemType = () => {
  const apiHook = useAPIHookManager<ShopifyApiHandlersType>((apiHooks) => {
    return apiHooks.cart.useCartUpdate;
  });

  return useAPIMutationManager(apiHook as APIHookMutationType)();
};
