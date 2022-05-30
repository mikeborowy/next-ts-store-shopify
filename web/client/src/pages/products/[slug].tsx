import { Layout } from "@components/shared";
import { getShopifyAPIConfig } from "@shopify/api";
import { getAllProductsPathsAPI, getProductAPI } from "@shopify/api/product";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { ProductDetails } from "../../components";

// import { ProductDetails } from "@components/product"

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getShopifyAPIConfig();
  const { productsPaths } = await getAllProductsPathsAPI(config);

  return {
    paths: productsPaths.map((path) => ({ params: { slug: path.slug } })),
    fallback: false,
  };
};

// provide product specific data to the page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getShopifyAPIConfig();

  const { product } = await getProductAPI({
    config,
    variables: { slug: params?.slug },
  });

  return {
    props: { product },
  };
};

type ProductSlugProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function ProductSlug({ product }: ProductSlugProps) {
  return <>{product && <ProductDetails product={product} />}</>;
}

ProductSlug.Layout = Layout;
