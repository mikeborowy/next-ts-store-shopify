import { useApiProvider } from "@context/ApiProvider";

export type APIHookManagerCbReturnType = {
  fetchAPI: (input: any) => any;
  useAPIHook: ({ fetch }: any) => any;
};

export function useAPIHookManager<H = undefined>(
  cb: (apiHooks: H) => APIHookManagerCbReturnType
) {
  const { apiHooks } = useApiProvider();

  return cb(apiHooks as H);
}
