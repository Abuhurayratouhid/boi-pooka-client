import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://boipooka-server.vercel.app/api/v1",
  }),
  tagTypes: ["books", "wishList"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (endpoint) => `/${endpoint}`,
      providesTags: ["books"],
    }),
    getAllBooksBySearch: builder.query({
      query: (searchValue) => `/books?searchTerm=${searchValue}`,
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => {
        // console.log("Is ID found", id);
        return `/book/${id}`;
      },
      providesTags: ["books"],
    }),
    getWishList: builder.query({
      query: (email: string) => {
        // console.log("Is ID found", id);
        return `/wishList/${email}`;
      },
      providesTags: ["wishList"],
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    addToWishList: builder.mutation({
      query: (data) => ({
        url: "/addWishList",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishList"],
    }),
    editBook: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    addReview: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `/review/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
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
  useGetAllBooksBySearchQuery,
  useAddToWishListMutation,
  useGetWishListQuery,
} = booksApi;
