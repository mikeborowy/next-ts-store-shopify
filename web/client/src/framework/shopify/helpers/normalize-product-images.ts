import { ProductImage } from "@models";
import { ImageEdge } from "@shopify/models/schema";

type NormalizeProductImagesParams = {
  edges: Array<ImageEdge>;
};

export const normalizeProductImages = ({
  edges,
}: NormalizeProductImagesParams): ProductImage[] =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));
