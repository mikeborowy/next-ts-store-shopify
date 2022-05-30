import { Product } from "@models";
import { normalizeProductImages } from "@shopify/helpers/normalize-product-images";
import { normalizeProductOption } from "@shopify/helpers/normalize-product-option";
import { normalizeProductPrice } from "@shopify/helpers/normalize-product-price";
import { normalizeProductVariants } from "@shopify/helpers/normalize-product-variants";
import { Product as ShopifyProduct } from "@shopify/models/schema";

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options
      ? options
          .filter((option) => option.name !== "Title")
          .map((option) => normalizeProductOption(option))
      : [],
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest,
  };

  return product;
};
