import { APIConfigType, APIVariables } from "@api";
import { getProductQuery } from "@shopify/graphql";
import { normalizeProduct } from "@shopify/helpers";
// import { getProductQuery, normalizeProduct } from "@shopify/utils";
import { Product } from "@models/product";
import { Product as ShopifyProduct } from "@shopify/models";

type FetchType = {
  productByHandle: ShopifyProduct;
};

type ReturnType = {
  product: Product | null;
};

type GetProductAPIOptionsType = {
  config: APIConfigType;
  variables: APIVariables;
};

export const getProductAPI = async (
  options: GetProductAPIOptionsType
): Promise<ReturnType> => {
  const { config, variables } = options;

  const { data } = await config.apiFetch<FetchType>({
    query: getProductQuery,
    variables,
  });

  const { productByHandle } = data;

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};
