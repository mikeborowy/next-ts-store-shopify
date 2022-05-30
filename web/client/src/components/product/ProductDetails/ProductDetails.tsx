// import { ProductSlider, Swatch } from "@components/product";
import { ProductSlider } from "@components/product";
import { Button, StylingContainer, Swatch } from "@components/ui";
import { useUI } from "@contexts/UIProvider";
import { ChoiceType, getVariant } from "@helpers";
import { useAddItem } from "@hooks";
import { Product } from "@models/product";
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import { useApiProvider } from "../../../contexts/ApiProvider";
import styles from "./ProductDetails.module.css";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [choices, setChoices] = useState<ChoiceType>({});
  const api = useApiProvider();

  const [isLoading, setIsLoading] = useState(false);

  const { onOpenSidebar } = useUI();
  const addItem = useAddItem();

  const variant = getVariant(product, choices);

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
        quantity: 1,
      };
      setIsLoading(true);
      // await addItem(item);
      addItem(item);
      setIsLoading(false);
      onOpenSidebar();
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <StylingContainer>
      <div className={cn(styles.root, "fit", "mb-5")}>
        <div className={cn(styles.productDisplay, "fit")}>
          <div className={styles.nameBox}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={styles.imageContainer}>
                <Image
                  className={styles.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={styles.sidebar}>
          <section>
            {product.options.map((option) => {
              console.log(option);

              return (
                <div key={option.id} className="pb-4">
                  <h2 className="uppercase font-medium">
                    {option.displayName}
                  </h2>
                  <div className="flex flex-row py-4">
                    {option.values.map((optValue) => {
                      const activeChoice =
                        choices[option.displayName?.toLowerCase()];

                      return (
                        <Swatch
                          key={`${option.id}-${optValue.label}`}
                          label={optValue.label}
                          color={optValue.hexColor}
                          variant={option.displayName}
                          active={
                            optValue.label?.toLowerCase() === activeChoice
                          }
                          onClick={() => {
                            setChoices({
                              ...choices,
                              [option.displayName.toLowerCase()]:
                                optValue.label?.toLowerCase(),
                            });
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button
              className={styles.button}
              onClick={addToCart}
              isLoading={isLoading}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </StylingContainer>
  );
};
