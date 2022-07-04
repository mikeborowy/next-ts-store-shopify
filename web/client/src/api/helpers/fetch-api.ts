import { API_URL } from "../../constants/api-url";

const API_METHODS = ["POST", "GET", "DELETE", "PUT", "PATCH"] as const;

export type APIMethod = typeof API_METHODS[number];

export type APIVariables = Record<string, string | any | undefined>;

export type APIFetchOptions = {
  query?: string;
  method?: APIMethod;
  variables?: APIVariables;
};

export type APIFetchResults<T> = {
  data: T;
};

export const fetchAPI = async <T = any>({
  query = "",
  method = "POST",
  variables = {},
}: APIFetchOptions): Promise<APIFetchResults<T>> => {
  const res = await fetch(API_URL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await res.json();

  // ?? is checking if left hand expression is null or undefined -> if it is go with right expression
  // || is checking if left hand expression is null, undefined, "", 0, false
  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};
