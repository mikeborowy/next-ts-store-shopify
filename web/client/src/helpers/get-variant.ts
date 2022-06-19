import { Product } from "@models/product";

type AvailableChoices = "color" | "size" | string;

export type ChoiceType = {
  [P in AvailableChoices]: string;
};

export const getVariant = (product: Product, choices: ChoiceType) =>
  product.variants.find((variant) =>
    variant.options.every((variantOption) => {
      const optionName = variantOption.displayName.toLocaleLowerCase();
      return (
        optionName in choices &&
        choices[optionName] === variantOption.values[0].label
      );
    })
  );
