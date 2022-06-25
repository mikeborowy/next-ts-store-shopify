import { APIFetchType } from "@api";
import { useApiProvider } from "@context/ApiProvider";

export type APIMutationContext = {
  fetchAPI: (input: any) => any;
};

export type FetchAPIContext = {
  input: any;
  fetch: APIFetchType;
};

export type APIMutationType = {
  fetchAPI: (context: FetchAPIContext) => any;
  useAPIHook: (context: APIMutationContext) => (input: any) => any;
};

export function useAPIHookManager<H = undefined>(
  cb: (apiHooks: H) => APIMutationType
) {
  const { apiHooks } = useApiProvider();

  return cb(apiHooks as H);
}
