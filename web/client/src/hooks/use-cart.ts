import { useAPIHookManager, useAPISWRManager } from "@api";
import { useApiProvider } from "@context/ApiProvider";
import { ShopifyApiHandlersType } from "@shopify/hooks";
import Cookies from "js-cookie";

// return apiHooks.cartAPI.useAPIHook();
export const useCart = () => {
  const apiHook = useAPIHookManager<ShopifyApiHandlersType>((apiHooks) => {
    return apiHooks.cart.useCart;
  });

  const { checkoutCookie } = useApiProvider();

  const apiFetchWrapper: typeof apiHook.fetchAPI = (context) => {
    Cookies.get(checkoutCookie);
    return apiHook.fetchAPI(context);
  };

  return useAPISWRManager({ ...apiHook, apiFetch: apiFetchWrapper })();
};
