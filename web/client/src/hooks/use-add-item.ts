import { useCart } from "@shopify/hooks";

export const useAddItem = () => {
  const { getCart } = useCart();
  return getCart();
};
