import { APIFetchType } from "@api";
import useSWR from "swr";

export const useAPIDataManager = (
  apiHook: any,
  apiFetch: APIFetchType,
  context: any
) => {
  const callAPI = async (query: string) => {
    try {
      return await apiHook.fetchAPI({
        fetch: apiFetch,
        options: { query },
        input: {},
      });
    } catch (error) {
      throw error;
    }
  };

  const response = useSWR(
    apiHook.fetchAPIOptions.query,
    callAPI,
    context.swrOptions
  );

  return response;
};
