import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="bg-[#E3F4FC]">
      <Header />
      <main className="min-h-screen dark:text-white dark:bg-gray-800">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
