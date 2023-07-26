import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books`,
    }),
    getSingleBook: builder.query({
      query: (id: string) => {
        // console.log("Is ID found", id);
        return `/book/${id}`;
      },
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "/create-book",
        method: "POST",
        body: data,
      }),
    }),
    editBook: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    addReview: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `/review/${_id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useDeleteBookMutation,
  useCreateBookMutation,
  useEditBookMutation,
  useAddReviewMutation,
} = booksApi;
