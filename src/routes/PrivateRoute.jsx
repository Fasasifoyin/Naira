/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { Token } from "../app/Slice/UserSlice";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = useSelector(Token);

  return (
    <>
      {token ? (
        children
      ) : (
        <Navigate
          to={"/login?redirect=/blog/create"}
          state={{ from: location }}
        />
      )}
    </>
  );
};

export default PrivateRoute;
