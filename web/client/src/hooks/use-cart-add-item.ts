import {
  APIHookMutationType,
  useAPIHookManager,
  useAPIMutationManager,
} from "@api";
import { ShopifyApiHandlersType } from "@shopify/hooks";

export type UseCartAddItemType<
  T extends APIHookMutationType = APIHookMutationType<any>
> = ReturnType<T["useAPIHook"]>;

// return apiHooks.cartAPI.useAPIHook();
export const useCartAddItem: UseCartAddItemType = () => {
  const apiHook = useAPIHookManager<ShopifyApiHandlersType>((apiHooks) => {
    return apiHooks.cart.useCartAdd;
  });

  return useAPIMutationManager(apiHook as APIHookMutationType)();
};
