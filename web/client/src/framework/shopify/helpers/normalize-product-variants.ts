import { normalizeProductOption } from "@shopify/helpers/normalize-product-option";
import { ProductVariantConnection, SelectedOption } from "@shopify/models";

export const normalizeProductVariants = ({
  edges,
}: ProductVariantConnection) => {
  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node;

    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({ name, value }: SelectedOption) => {
        console.log({ value });

        const option = normalizeProductOption({
          id,
          name,
          values: [value],
        });

        return option;
      }),
    };
  });
};
