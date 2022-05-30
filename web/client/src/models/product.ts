import { CURRENCY } from "../constants";

export type ProductImage = {
  url: string;
  alt?: string;
};

type CurrencyCode = keyof typeof CURRENCY;

export type ProductPrice = {
  value: number;
  currencyCode: CurrencyCode | string;
};

export type ProductOptionValues = {
  label: string;
  hexColor?: string;
};

export type ProductOption = {
  id: string;
  displayName: string;
  values: ProductOptionValues[];
};

export type ProductVariant = {
  id: string;
  name: string;
  sku: string;
  image?: ProductImage;
  requiresShipping: boolean;
  price: number;
  listPrice: number;
  options: ProductOption[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
  price: ProductPrice;
  options: ProductOption[];
  variants: ProductVariant[];
};
