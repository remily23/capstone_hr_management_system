import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const Navigation = () => {
  return (
    <>
      <nav>
        <SideBar />
        <Outlet />
      </nav>
    </>
  );
};
export default Navigation;








