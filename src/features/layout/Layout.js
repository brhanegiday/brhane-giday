import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="">
      <Header />
      <main className="min-h-screen bg-[#E3F4FC] ">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
