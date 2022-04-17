import React from "react";
import Footer from "../Navigations/Footer";

function Layout({ children }) {
  return (
    <div>
      <div class="margin_80">
        <main class="margin_80">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
