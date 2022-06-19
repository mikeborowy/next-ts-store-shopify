import { APIHookManagerCbReturnType } from "@hooks";

export const useAddToCart: APIHookManagerCbReturnType = {
  fetchAPI: (input: any) => {
    console.log("Fetching Data!");
    return JSON.stringify(input) + "_MODIFIED";
  },
  useAPIHook: ({ fetch }: any) => {
    return (input: any) => {
      debugger;
      const output = fetch(input);
      debugger;

      return {
        output,
      };
    };
  },
};
