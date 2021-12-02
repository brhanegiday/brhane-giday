import Image from "next/image";
import React from "react";
function ShowCase({ showCase }) {
  return (
    <React.Fragment>
      <div className="relative">
        <div className="relative lg:h-[20vw] md:h-[40vw] h-[50vw]">
          <a href={showCase.url} target="_blank" rel="preload prefetch">
            <Image
              src={showCase.image}
              alt={showCase.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="10% 50%"
              className="rounded-lg"
              priority
            />
          </a>
        </div>
        <div className="absolute bottom-4 md:bottom-4 flex flex-col items-center">
          <h3 className="text-center text-xl text-white hover:underline">
            <a href={showCase.url} target="_blank" rel="noopener">
              {showCase.title}
            </a>
          </h3>
          <p className="text-sm mt-1 text-center w-4/5 md:w-4/6 mx-auto text-white">
            {showCase.excerpt}
          </p>

          <button
            type="button"
            className="mt-2 w-3/5 hidden md:block rounded-full text-sm px-4 py-1 bg-[#66ba5d] text-white hover:translate-x-2 transition duration-200 ease-in-out"
          >
            View Project
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ShowCase;
