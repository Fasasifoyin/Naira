import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const Layout = () => {
  return (
    <>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <Navbar />
      )}
      <Outlet />
    </>
  );
};

export default Layout;
