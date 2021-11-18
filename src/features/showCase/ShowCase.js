import { showCases } from "data/data";
import Image from "next/image";

function ShowCase() {
  return (
    <div className="container py-5 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
        {showCases.map((showCase) => (
          <div className="relative" key={`show-case${showCase.id}`}>
            <a href={showCase.url} target="_blank" rel="noopener">
              <div className="opacity-90 rounded-lg h-[20vw]">
                <div className="relative h-[20vw] w-[100%] -z-1">
                  <Image
                    src={showCase.image}
                    alt={showCase.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="10% 50%"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute bottom-3 flex flex-col items-center">
                <h3 className="text-center text-xl text-white hover:underline">
                  {/* <a
                    href={showCase.url}
                    target="_blank"
                    rel="noopener"
                    className="hover:underline"
                  > */}
                  {showCase.title}
                  {/* </a> */}
                </h3>
                <p className="text-sm mt-1 text-center w-4/5 mx-auto text-white hover:underline">
                  {showCase.excerpt}
                </p>

                <button
                  type="button"
                  className="mt-2 w-3/5  rounded-full text-sm px-4 py-1 bg-[#66ba5d] text-white"
                >
                  Read More
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowCase;
