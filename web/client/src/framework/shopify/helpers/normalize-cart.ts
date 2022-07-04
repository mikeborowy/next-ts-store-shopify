import { Cart } from "@models";
import { Checkout } from "@shopify/models";
import { normalizeLineItem } from "./normalize-line-Item";

export const normalizeCart = (checkout: Checkout): Partial<Cart> => {
  return {
    id: checkout.id,
    createdAt: checkout.createdAt,
    currency: {
      code: checkout.totalPriceV2.currencyCode,
    },
    taxesIncluded: checkout.taxesIncluded,
    lineItemsSubtotalPrice: +checkout.subtotalPriceV2.amount,
    totalPrice: checkout.totalPriceV2.amount,
    lineItems: checkout.lineItems.edges.map(normalizeLineItem),
    discounts: [],
  };
};
