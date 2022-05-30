const API_METHODS = ["POST", "GET", "DELETE", "PUT", "PATCH"] as const;

export type APIMethod = typeof API_METHODS[number];

export type APIVariables = Record<string, string | any | undefined>;

export type APIFetchOptions = {
  url: string;
  query: string;
  method: APIMethod;
  variables?: APIVariables;
};

export type APIFetchResults<T> = {
  data: T;
};

export const fetchAPI = async <T = any>({
  url = "http://localhost:4000/graphql",
  query = "",
  method = "GET",
  variables = {},
}: APIFetchOptions): Promise<APIFetchResults<T>> => {
  const res = await fetch(url, {
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
