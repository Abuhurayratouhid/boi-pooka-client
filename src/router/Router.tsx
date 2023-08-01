import { createBrowserRouter } from "react-router-dom";
import NotFound from "../notFound/NotFound";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Books from "../pages/AllBooks/Books";
import SignUp from "../pages/SignUp/SignUp";
import SingleBook from "../components/SingleBook";
import EditBook from "../components/EditBook";
import App from "../App";
import AddBook from "../components/AddBook";
import PrivateRoute from "./PrivetRoute";
import WishList from "../components/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <SingleBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/editBook/:id",
        element: <EditBook />,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
