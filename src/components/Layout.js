import React from "react";
import Footer from "./Footer/Footer";
import AppBar from "./AppBar/AppBar";
function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
