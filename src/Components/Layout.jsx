import React from "react";
import Nav from "./Nav";
import Foot from "./Foot";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Foot />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
