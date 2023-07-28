import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../DefaultLayout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
      <RouterProvider
        router={router}
      />
      ;
    </AnimatePresence>
  );
};

export default Routespath;
