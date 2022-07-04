import { APIHookMutationType, APIHookSWRType } from "@api";
import { useApiProvider } from "@context/ApiProvider";

export function useAPIHookManager<H = undefined>(
  cb: (apiHooks: H) => APIHookMutationType | APIHookSWRType
) {
  const { apiHooks } = useApiProvider();

  return cb(apiHooks as H);
}
