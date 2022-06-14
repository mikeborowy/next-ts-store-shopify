import { APIConfigType } from "@api";
import { getAllProductsQuery } from "@framework/graphql/queries";
import { normalizeProduct } from "@framework/helpers";
import { ProductConnection } from "@framework/models";
import { Product } from "@models";

type FetchType = {
  products: ProductConnection;
};

type ReturnType = Product[];

export const getAllProductsAPI = async (
  config: APIConfigType
): Promise<ReturnType> => {
  const { data } = await config.apiFetch<FetchType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
    method: "POST",
  });

  const products =
    data.products.edges.map((product) => normalizeProduct(product.node)) ?? [];

  return products;
};
