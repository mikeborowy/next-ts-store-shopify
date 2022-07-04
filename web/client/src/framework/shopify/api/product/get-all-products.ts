import { APIConfigType } from "@api";
import { Product } from "@models";
import { getAllProductsQuery } from "@shopify/graphql/queries";
import { normalizeProduct } from "@shopify/helpers";
import { ProductConnection } from "@shopify/models";

type FetchType = {
  products: ProductConnection;
};

type ReturnType = Product[];

export const getAllProductsAPI = async (
  config: APIConfigType
): Promise<ReturnType> => {
  const { data } = await config.apiFetch<FetchType>({
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map((product) => normalizeProduct(product.node)) ?? [];

  return products;
};
