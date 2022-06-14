import { useAPIHookManager } from "@hooks/use-api-hook-manager";

// return apiHooks.cartAPI.useAPIHook();
export const useAddItem = () => {
  const hook = useAPIHookManager((apiHooks) => {
    debugger;

    return apiHooks.apiHandlers.cart.useAddToCartHandlers;
  });

  debugger;

  return hook?.useAPIHook();
};
