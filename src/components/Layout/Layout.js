import React from "react";
import Footer from "../Navigations/Footer";

function Layout({ children }) {
  return (
    <>
      <main class="">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
