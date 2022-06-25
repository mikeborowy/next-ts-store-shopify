import { APIMutationType } from "@hooks";

export const useAddToCart: APIMutationType = {
  fetchAPI: (context) => {
    const { fetch, input } = context;
    debugger;

    const response = fetch(input);
    debugger;

    return response;
  },
  useAPIHook: (context) => {
    const { fetchAPI } = context;

    return (input: any) => {
      const output = fetchAPI(input);
      debugger;

      return {
        output,
      };
    };
  },
};
