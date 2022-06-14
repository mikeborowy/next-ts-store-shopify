import { APIConfigType } from "@api";
import { getAllProductsPathsQuery } from "@framework/graphql/queries";
import { ProductConnection } from "@framework/models";
import { Product } from "@models/product";

type FetchType = { products: ProductConnection };

type ReturnType = {
  productsPaths: Pick<Product, "slug">[];
};

export const getAllProductsPathsAPI = async (
  config: APIConfigType
): Promise<ReturnType> => {
  const { data } = await config.apiFetch<FetchType>({
    url: config.apiUrl,
    query: getAllProductsPathsQuery,
    method: "POST",
  });

  const productsPaths = data.products.edges.map(({ node }) => {
    return {
      slug: node.handle,
    };
  });

  return { productsPaths };
};
