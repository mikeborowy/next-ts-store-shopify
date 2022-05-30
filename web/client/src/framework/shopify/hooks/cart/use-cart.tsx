export const useCart = () => ({
  fetch: () => {
    console.log("Fetching Data!");
  },
  getCart: () => {
    return (input: any) => {
      return {
        output: JSON.stringify(input) + "_MODIFIED",
      };
    };
  },
});
