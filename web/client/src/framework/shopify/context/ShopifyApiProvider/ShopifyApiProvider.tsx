// import { shopifyHooks } from "./hooks"
import { ApiProvider, useApiProvider } from "@context/ApiProvider";
import { getShopifyAPIConfig } from "@framework/api";
import { ReactNode } from "react";

const config = getShopifyAPIConfig();

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}

export const ShopifyApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return <ApiProvider config={config}>{children}</ApiProvider>;
};

export const useShopifyApiProvider = () => useApiProvider();
