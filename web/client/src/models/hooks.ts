import { APIFetchOptions, APIFetchResults } from "@api";
import { SWRResponse } from "swr";

export type MutationHookContext<Input, Output> = {
  fetch: (input: Input) => Promise<Output>;
};

export type SWRHookContext<Input, Output> = {
  useData: (input: Input) => Promise<Output>;
};

export type HookFetchContext<Input, Output> = {
  input: Input;
  fetch: APIFetchResults<Output>;
  options: APIFetchOptions;
};

export type HookFetcherOptions = {
  query: string;
};

export type HookFetchFn<Input, Output, Data> = (
  context: HookFetchContext<Input, Output>
) => Promise<Data>;

export type HookDescriptor = {
  fetchInput: any;
  fetchOutput: any;
  data: any;
};

export type MutationHook<H extends HookDescriptor = any> = {
  fetchOptions: HookFetcherOptions;
  fetch: HookFetchFn<H["fetchInput"], H["fetchOutput"], H["data"]>;
  useHook(
    context: MutationHookContext<H["fetchInput"], H["data"]>
  ): () => (input: H["fetchInput"]) => Promise<H["data"]>;
};

export type UseDataContext = {
  swrOptions: any;
};

export type UseDataType<Data> = (context: UseDataContext) => Data;

export type SWRHookResponse<Data> = SWRResponse<Data, any> & {
  isEmpty: boolean;
};

export type SWRHook<H extends HookDescriptor = any> = {
  fetchOptions: HookFetcherOptions;
  fetch: HookFetchFn<H["fetchInput"], H["fetchOutput"], H["data"]>;
  useSWRHook(context: {
    useData: UseDataType<SWRHookResponse<H["data"]>>;
  }): () => SWRHookResponse<H["data"]>;
};

export type Hook = MutationHook | SWRHook;
