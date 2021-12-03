import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="">
      <Header />
      <main className="min-h-screen bg-[#eaf7fd] ">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
