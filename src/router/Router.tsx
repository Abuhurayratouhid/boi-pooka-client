import { createBrowserRouter } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Books from "../pages/AllBooks/Books";
import SignUp from "../pages/SignUp/SignUp";
import SingleBook from "../components/SingleBook";
import EditBook from "../components/EditBook";
import App from "../App";

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
        path: "/book/:id",
        element: <SingleBook />,
      },
      {
        path: "/editBook/:id",
        element: <EditBook />,
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
