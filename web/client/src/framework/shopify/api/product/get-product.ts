import { APIConfigType, APIVariables } from "@api";
import { getProductQuery } from "@framework/graphql";
import { normalizeProduct } from "@framework/helpers";
// import { getProductQuery, normalizeProduct } from "@framework/utils";
import { Product as ShopifyProduct } from "@framework/models";
import { Product } from "@models/product";

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
    url: config.apiUrl,
    query: getProductQuery,
    method: "POST",
    variables,
  });

  const { productByHandle } = data;

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};
