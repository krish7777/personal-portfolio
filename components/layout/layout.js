import React from "react";
import Nav from "../nav/nav";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
