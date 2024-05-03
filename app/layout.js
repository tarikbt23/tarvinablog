import React from "react";
import "../styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header><Header/></header>
        <main>{children}</main>
        <footer><Footer/></footer>
      </body>
    </html>
  );
};

export default Layout;
