import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="min-h-screen flex text-white">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
};

export default Layout;
