import { APIConfigType } from "@api";
import { Product } from "@models/product";
import { getAllProductsPathsQuery } from "@shopify/graphql/queries";
import { ProductConnection } from "@shopify/models";

type FetchType = { products: ProductConnection };

type ReturnType = {
  productsPaths: Pick<Product, "slug">[];
};

export const getAllProductsPathsAPI = async (
  config: APIConfigType
): Promise<ReturnType> => {
  const { data } = await config.fetch<FetchType>({
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
