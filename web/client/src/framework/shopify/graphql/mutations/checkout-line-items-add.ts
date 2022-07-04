import { checkoutDetailFragment } from "../queries";

export const checkoutLineItemsAdd = `
  mutation(
    $checkoutId: ID!,
    $lineItems: [CheckoutLineItemInput!]! ) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkoutUserErrors {
        field
        message
      }
      checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`;
