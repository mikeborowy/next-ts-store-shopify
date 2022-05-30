import { ProductCard } from "@components/product";
import { Product } from "@models";

type ProductListProps = { products: Product[] };

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.slice(0, 3).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};
