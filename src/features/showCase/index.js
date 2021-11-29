import React from "react";
import ShowCase from "./ShowCase";

function Works() {
  return (
    <div className="py-5 container mx-auto" id="my-work">
      <div className=" justify-center flex items-baseline space-x-1">
        <h3 className="text-center text-3xl text-gray-700 font-semibold">
          Some of my Works
        </h3>
        <div className="w-2 h-2 rounded-full bg-[#66ba5d]"></div>
      </div>
      <p className="py-3 text-center text-gray-700 text-sm w-3/5 mx-auto">
        I've worked at start-ups, tech companies and corporates on a range of
        different projects, including design systems, websites and apps. These
        are some of the projects I have worked and participated.
      </p>
      <ShowCase />
    </div>
  );
}

export default Works;
