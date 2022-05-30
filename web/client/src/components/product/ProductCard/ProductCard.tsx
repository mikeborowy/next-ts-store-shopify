import { Product } from "@models";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

type VariantType = "simple" | "slim";

interface ProductCardProps {
  product: Product;
  variant?: VariantType;
}

const placeholderImage = "/product-image-placeholder.svg";

export const ProductCard = ({ product, variant }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={styles.root}>
        {variant === "slim" ? (
          <>
            <div className="inset-0 flex items-center justify-center absolute z-20">
              <span className="bg-black text-white p-3 font-bold text-xl">
                {product.name}
              </span>
            </div>
            {product.images && (
              <Image
                className={styles.productImage}
                alt={product.name ?? "Product image"}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
            <div className={styles.productBgnd}></div>
            <div className={styles.productTag}>
              <h3 className={styles.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={styles.productPrice}>
                {product.price?.value} {product.price?.currencyCode}
              </span>
            </div>
            {product.images && (
              <Image
                className={styles.productImage}
                alt={product.name ?? "Product image"}
                src={product.images[0].url ?? placeholderImage}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
              />
            )}
          </>
        )}
      </a>
    </Link>
  );
};
