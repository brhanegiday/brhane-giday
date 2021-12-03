import React from "react";
import ShowCase from "./ShowCase";
import { showCases } from "data/data";

function Works() {
  return (
    <div
      className="py-5 mx-auto xl:container sm:px-16 px-10 lg:px-20"
      id="my-work"
    >
      <div className=" justify-center flex items-baseline space-x-1">
        <h3 className="text-center text-xl md:text-3xl text-gray-700 font-semibold">
          Some of my Works
        </h3>
        <div className="w-2 h-2 rounded-full bg-[#66ba5d]"></div>
      </div>
      <p className="py-3 mb-6 md:text-center text-gray-700 text-sm w-full lg:w-3/5 mx-auto">
        I've worked at start-ups, tech companies and corporates on a range of
        different projects, including design systems, websites and apps. These
        are some of the projects I have worked and participated.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-20">
        {showCases.map((showCase) => (
          <ShowCase showCase={showCase} key={showCase.id} />
        ))}
      </div>
    </div>
  );
}

export default Works;
