import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books`,
    }),
  }),
});

export const { useGetAllBooksQuery } = booksApi;
