import React from "react";
import ShowCase from "./ShowCase";

function Works() {
  return (
    <div className="py-5 container mx-auto">
      <h3 className="text-center text-4xl">Works</h3>
      <p className="py-3 text-center">
        These are some of the projects I have worked and participated on up
        until now.
      </p>
      <ShowCase />
    </div>
  );
}

export default Works;
