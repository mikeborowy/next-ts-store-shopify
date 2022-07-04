import { APIConfigType, APIFetchType, APIHooksType } from "@api";
import { createContext, ReactNode, useContext, useMemo } from "react";

type ApiContextType = {
  apiFetch: APIFetchType;
  apiHooks: APIHooksType;
  checkoutCookie: string;
};

export const ApiContext = createContext<ApiContextType | null>(null);

interface ApiProviderProps {
  children: ReactNode;
  config: APIConfigType;
}

const ApiProvider = ({ children, config: configProps }: ApiProviderProps) => {
  const config = useMemo(() => {
    return {
      apiFetch: configProps.apiFetch,
      apiHooks: configProps.apiHooks,
      checkoutCookie: configProps.checkoutCookie,
    };
  }, [configProps.apiFetch, configProps.checkoutCookie, configProps.apiHooks]);

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
