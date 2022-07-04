import { APIFetchOptions, APIFetchType } from "@api";
import { useApiProvider } from "@context/ApiProvider";

export type FetchAPIContext<I = any, O = any> = {
  input: I;
  fetch: APIFetchType<O>;
  options: APIFetchOptions;
};

export type APIMutationContext<I = any, O = any> = {
  fetchAPI: (input: I) => Promise<O>;
};

export type APIHookDescriptorType = {
  fetcherInput: any;
  fetcherOutput: any;
  data: any;
};

export type APIHookMutationType<T extends APIHookDescriptorType = any> = {
  fetchAPIOptions: APIFetchOptions;
  fetchAPI: (
    context: FetchAPIContext<T["fetcherInput"], T["fetcherOutput"]>
  ) => Promise<T["data"]>;
  useAPIHook: (
    context: APIMutationContext<T["fetcherInput"], T["data"]>
  ) => () => (input: T["fetcherInput"]) => Promise<T["data"]>;
};

export const useAPIMutationManager = (apiHook: APIHookMutationType) => {
  const { apiFetch } = useApiProvider();

  const response = apiHook.useAPIHook({
    fetchAPI: (input: any) => {
      return apiHook.fetchAPI({
        input,
        fetch: apiFetch as APIFetchType,
        options: apiHook.fetchAPIOptions,
      });
    },
  });

  return response;
};
