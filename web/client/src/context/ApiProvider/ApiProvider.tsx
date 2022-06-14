import { APIConfigType, APIFetchType, APIHooksType } from "@api";
import { createContext, ReactNode, useContext, useMemo } from "react";

type ApiContextType = {
  apiFetch: APIFetchType;
  apiHooks: APIHooksType;
};

export const ApiContext = createContext<Partial<ApiContextType>>({});

interface ApiProviderProps {
  children: ReactNode;
  config: Partial<APIConfigType>;
}

const ApiProvider = ({ children, config: configProps }: ApiProviderProps) => {
  debugger;

  const config = useMemo(() => {
    return {
      apiFetch: configProps.apiFetch,
      apiHooks: configProps.apiHooks,
    };
  }, [configProps.apiFetch, configProps.apiHooks]);

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
