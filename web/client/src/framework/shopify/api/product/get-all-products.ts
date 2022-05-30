import { APIConfigType } from "@api";
import { Product } from "@models";
import { getAllProductsQuery } from "../../graphql/queries";
import { normalizeProduct } from "../../helpers";
import { ProductConnection } from "../../models";

type FetchType = {
  products: ProductConnection;
};

type ReturnType = Product[];

export const getAllProductsAPI = async (
  config: APIConfigType
): Promise<ReturnType> => {
  const { data } = await config.fetch<FetchType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
    method: "POST",
  });

  const products =
    data.products.edges.map((product) => normalizeProduct(product.node)) ?? [];

  return products;
};
