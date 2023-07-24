import { configureStore } from "@reduxjs/toolkit";

// import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "./feature/user/userSlice";

import { booksApi } from "./api/bookApi";

export const store = configureStore({
  reducer: {
    user: userReducer,

    [booksApi.reducerPath]: booksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
