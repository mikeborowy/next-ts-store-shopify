import { APIConfigType } from "@api";
import { createContext, ReactNode, useContext } from "react";
import { getShopifyAPIConfig } from "../../framework/shopify/api";

export const ApiContext = createContext({});

const config: APIConfigType = getShopifyAPIConfig();

interface ApiProviderProps {
  children: ReactNode;
}

const ApiProvider = ({ children }: ApiProviderProps) => {
  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>;
};

const useApiProvider = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiProvider must be used within a ApiProvider");
  }
  return context;
};

export { ApiProvider, useApiProvider };
