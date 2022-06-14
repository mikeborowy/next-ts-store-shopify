import { useApiProvider } from "@context/ApiProvider";
import { APIHandlersType } from "@framework/hooks";

export type APIFrameworkHandlerType = {
  fetchAPI: () => any;
  useAPIHook: () => any;
};

export const useAPIHookManager = (
  cb: (apiHooks: any) => APIFrameworkHandlerType
) => {
  const { apiHooks } = useApiProvider();
  debugger;

  return cb(apiHooks as APIHandlersType);
};
