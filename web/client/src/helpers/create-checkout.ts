import { APIFetchType } from "@api";
import {
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CHECKOUT_URL_COOKIE,
  SHOPIFY_COOKIE_EXPIRE,
} from "@constants";
import { checkoutCreate } from "@shopify/graphql";
import { Checkout, CheckoutCreatePayload } from "@shopify/models";
import Cookies from "js-cookie";

type CreateCheckoutType = {
  checkoutCreate: CheckoutCreatePayload;
};

export const createCheckout = async (
  apiFetch: APIFetchType
): Promise<Checkout> => {
  const { data } = await apiFetch({ query: checkoutCreate });

  const { checkout } = (data as CreateCheckoutType).checkoutCreate;

  if (!checkout) {
    throw new Error("Stupid tutorial");
  }

  const checkoutId = checkout?.id;

  if (checkoutId) {
    const options = {
      expires: SHOPIFY_COOKIE_EXPIRE,
    };

    Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkoutId, options);
    Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, checkout?.webUrl, options);
  }

  return checkout;
};
