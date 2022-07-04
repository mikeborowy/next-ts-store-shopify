import { APIHookMutationType } from "@api";
import { getCheckoutId } from "@helpers";
import { useCart } from "@hooks";
import { Cart } from "@models";
import { checkoutLineItemsRemove } from "@shopify/graphql";
import { normalizeCheckout } from "@shopify/helpers";
import { CheckoutLineItemsRemovePayload } from "@shopify/models";

type CartRemoveHandlerDescriptorType = {
  fetcherInput: {
    id: string;
  };
  fetcherOutput: {
    checkoutLineItemsRemove: CheckoutLineItemsRemovePayload;
  };
  data: Partial<Cart>;
};

export type UseCartRemoveHandlerType = typeof useCartRemoveHandler;

export const useCartRemoveHandler: APIHookMutationType<CartRemoveHandlerDescriptorType> =
  {
    fetchAPIOptions: {
      query: checkoutLineItemsRemove,
    },
    fetchAPI: async (context) => {
      const {
        fetch,
        input: { id },
        options,
      } = context;

      const response = await fetch({
        ...options,
        variables: {
          checkoutId: getCheckoutId(),
          lineItemIds: [id],
        },
      });

      const cart = normalizeCheckout(
        response.data.checkoutLineItemsRemove.checkout
      );
      return cart;
    },
    useAPIHook: (context) => () => {
      const { fetchAPI } = context;
      const { mutate: updateCart } = useCart();

      return async (input) => {
        const data = await fetchAPI(input);
        updateCart(data, false);
        return data;
      };
    },
  };
