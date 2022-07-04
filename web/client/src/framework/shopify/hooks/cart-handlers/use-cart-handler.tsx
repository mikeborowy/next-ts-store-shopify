import { APIHookSWRType, FetchAPIContext } from "@api";
import { createCheckout } from "@helpers";
import { Cart } from "@models";
import { getCheckoutQuery } from "@shopify/graphql";
import { normalizeCheckout } from "@shopify/helpers";
import { Checkout } from "@shopify/models";
import { useMemo } from "react";

type CartHandlerDescriptorType = {
  fetcherInput: {
    variantId: string;
    quantity: number;
  };
  fetcherOutput: {
    node: Checkout;
  };
  data: Partial<Cart>;
};

export type UseCartHandlerType = typeof useCartHandler;

export const useCartHandler: APIHookSWRType<CartHandlerDescriptorType> = {
  fetchAPIOptions: { query: getCheckoutQuery },
  fetchAPI: async (context: FetchAPIContext) => {
    const {
      fetch,
      options,
      input: { checkoutId },
    } = context;

    let checkout: Checkout;

    if (checkoutId) {
      const data = await fetch({ ...options, variables: { checkoutId } });

      checkout = (data as any).node;
    } else {
      checkout = await createCheckout(fetch);
    }

    const cart = normalizeCheckout(checkout);

    return cart;
  },
  useAPIHook: (context) => () => {
    const { useData } = context;
    const response = useData({ swrOptions: { revalidateOnFocus: false } });
    const isEmpty = response?.data?.lineItems?.length < 0;

    return useMemo(() => {
      return { ...response, isEmpty };
    }, [response]);
  },
};
