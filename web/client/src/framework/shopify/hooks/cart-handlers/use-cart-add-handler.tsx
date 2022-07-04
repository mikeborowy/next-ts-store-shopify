import { APIHookMutationType } from "@api";
import { getCheckoutId } from "@helpers";
import { Cart } from "@models";
import { checkoutLineItemsAdd } from "@shopify/graphql/mutations";
import { normalizeCheckout } from "@shopify/helpers";
import { CheckoutLineItemsAddPayload } from "@shopify/models";
import { useCart } from "../../../../hooks";

type CartAddHandlerDescriptorType = {
  fetcherInput: {
    variantId: string;
    quantity: number;
  };
  fetcherOutput: {
    checkoutLineItemsAdd: CheckoutLineItemsAddPayload;
  };
  data: Partial<Cart>;
};

export type UseCartAddHandlerType = typeof useCartAddHandler;

export const useCartAddHandler: APIHookMutationType<CartAddHandlerDescriptorType> =
  {
    fetchAPIOptions: {
      query: checkoutLineItemsAdd,
    },
    fetchAPI: async (context) => {
      const { fetch, input, options } = context;

      const variables = {
        checkoutId: getCheckoutId(),
        lineItems: [
          {
            variantId: input.variantId,
            quantity: 1,
          },
        ],
      };
      const response = await fetch({
        query: options.query,
        variables,
      });

      const cart = normalizeCheckout(
        response.data.checkoutLineItemsAdd.checkout
      );

      return cart;
    },
    useAPIHook: (context) => () => {
      const { fetchAPI } = context;
      const { mutate: updateCart } = useCart();

      return async (input) => {
        const response = await fetchAPI(input);
        updateCart(response, false);
        return response;
      };
    },
  };
