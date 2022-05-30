import { MoneyV2 } from "@shopify/models";

export const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  value: +amount,
  currencyCode,
});
