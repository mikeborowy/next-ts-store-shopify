import { APIFetchType } from "@api";
import { useApiProvider } from "@context/ApiProvider";
import { APIMutationType } from "@hooks/use-api-hook-manager";

export const useAPIMutationManager = (apiHook: APIMutationType) => {
  // const { fetchAPI, useAPIHook } = apiHook;
  const { apiFetch } = useApiProvider();

  return apiHook.useAPIHook({
    fetchAPI: (input: any) => {
      debugger;
      return apiHook.fetchAPI({
        input,
        fetch: apiFetch as APIFetchType,
      });
    },
  });
};
