import {
  APIHookMutationType,
  useAPIHookManager,
  useAPIMutationManager,
} from "@api";
import { ShopifyApiHandlersType } from "@shopify/hooks";

export type UseCartRemoveItemType<
  T extends APIHookMutationType = APIHookMutationType<any>
> = ReturnType<T["useAPIHook"]>;

export const useCartRemoveItem: UseCartRemoveItemType = () => {
  const apiHook = useAPIHookManager<ShopifyApiHandlersType>((apiHooks) => {
    return apiHooks.cart.useCartRemove;
  });

  return useAPIMutationManager(apiHook as APIHookMutationType)();
};
