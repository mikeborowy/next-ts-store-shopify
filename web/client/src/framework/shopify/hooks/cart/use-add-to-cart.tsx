import { APIFrameworkHandlerType } from "../../../../hooks";

export const useAddToCartHandlers: APIFrameworkHandlerType = {
  fetchAPI: () => {
    console.log("Fetching Data!");
  },
  useAPIHook: () => {
    return (input: any) => {
      debugger;
      return {
        output: JSON.stringify(input) + "_MODIFIED",
      };
    };
  },
};
