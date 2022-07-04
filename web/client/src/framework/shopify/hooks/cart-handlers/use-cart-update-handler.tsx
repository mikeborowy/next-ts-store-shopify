import { APIHookMutationType } from "@api";
import { getCheckoutId } from "@helpers";
import { useCart } from "@hooks";
import { Cart } from "@models";
import { checkoutLineItemUpdate } from "@shopify/graphql/mutations";
import { normalizeCheckout } from "@shopify/helpers";
import { CheckoutLineItemsUpdatePayload } from "@shopify/models";

type CartUpdateHandlerDescriptorType = {
  fetcherInput: {
    id: string;
    variantId: string;
    quantity: number;
  };
  fetcherOutput: {
    checkoutLineItemsUpdate: CheckoutLineItemsUpdatePayload;
  };
  data: Partial<Cart>;
};

export type UseCartUpdateHandlerType = typeof useCartUpdateHandler;

export const useCartUpdateHandler: APIHookMutationType<CartUpdateHandlerDescriptorType> =
  {
    fetchAPIOptions: {
      query: checkoutLineItemUpdate,
    },
    fetchAPI: async (context) => {
      const { fetch, input: item, options } = context;
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId: getCheckoutId(),
          lineItems: [
            {
              id: item.id,
              variantId: item.variantId,
              quantity: item.quantity ?? 1,
            },
          ],
        },
      });

      const cart = normalizeCheckout(data.checkoutLineItemsUpdate.checkout);
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
