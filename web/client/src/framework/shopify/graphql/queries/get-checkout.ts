import { checkoutDetailFragment } from "./checkout-detail-fragment";

export const getCheckoutQuery = `
  query($checkoutId: ID!){
    node(id: $checkoutId) {
      ... on Checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`;
