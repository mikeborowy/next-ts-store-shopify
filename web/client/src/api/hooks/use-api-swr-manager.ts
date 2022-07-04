import { APIFetchOptions } from "@api/helpers";
import {
  APIHookDescriptorType,
  FetchAPIContext,
  useAPIDataManager,
} from "@api/hooks";
import { useApiProvider } from "@context/ApiProvider";
import { SWRResponse } from "swr";

export type UseDataContextType = {
  swrOptions: any;
};

export type UseDataType<D> = (context: UseDataContextType) => D;

export type APISWRContext<T extends APIHookDescriptorType = any> = {
  useData: UseDataType<SWRResponse<T["data"], any>>;
};

export type APIHookSWRType<T extends APIHookDescriptorType = any> = {
  fetchAPIOptions: APIFetchOptions;
  fetchAPI: (
    context: FetchAPIContext<T["fetcherInput"], T["fetcherOutput"]>
  ) => Promise<T["data"]>;
  useAPIHook: (context: APISWRContext) => () => SWRResponse<T["data"], any>;
};

export const useAPISWRManager = (apiHook: any) => {
  const { apiFetch } = useApiProvider();

  return apiHook.useAPIHook({
    useData: (context: any) => {
      const data = useAPIDataManager(apiHook, apiFetch, context);

      return data;
    },
  });
};
