import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../DefaultLayout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CreateBlog from "../pages/CreateBlog";
import New from "../pages/New";
import Trending from "../pages/Trending";
import Recent from "../pages/Recent";
import DetailedPage from "../pages/DetailedPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/blog/create",
        element: <CreateBlog />,
      },
      {
        path: "new",
        element: <New />,
        children: [
          {
            path: ":newPage",
            element: <New />,
          },
        ],
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/recent",
        element: <Recent />,
      },
      {
        path: "/:id",
        element: <DetailedPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const Routespath = () => {
  const router = createBrowserRouter(routes);

  return (
    <AnimatePresence>
      <RouterProvider router={router} />;
    </AnimatePresence>
  );
};

export default Routespath;
