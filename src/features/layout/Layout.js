import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="bg-[#f5f5f5]">
      <Header />
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
