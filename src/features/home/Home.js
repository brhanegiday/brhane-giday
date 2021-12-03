import { useState } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Link } from "react-scroll";

function Home() {
  const [mouseEvent, setMouseEvent] = useState(false);

  return (
    <div
      className="py-8 px-10 sm:px-16 lg:px-20 xl:container mx-auto"
      id="home"
    >
      <div className=" grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="text-gray-900 py-6 mb-4 md:pb-0 md:mb-0">
          <h1 className="text-md md:text-lg pb-1  text-gray-700 font-semibold text-center sm:text-left ">
            Hello, it's me
          </h1>
          <div className="flex space-x-1 items-baseline justify-center sm:justify-start">
            <h2 className="text-2xl md:text-4xl text-gray-700 font-semibold ">
              Brhane Giday
            </h2>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#66ba5d]"></div>
          </div>
          <p className="w-full sm:w-4/5 text-sm py-2 text-gray-700 text-center sm:text-left">
            A freelance software engineer specialized in both front-end and
            back-end web development.
          </p>
          <Link
            to="my-work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              type="button"
              onMouseOver={() => setMouseEvent(true)}
              onMouseLeave={() => setMouseEvent(false)}
              className="flex mx-auto sm:mx-0 group space-x-1 items-center shadow-md rounded-full hover:bg-[#66ba5d] border-b-4 border-t-[1px] border-[#66ba5d] py-2 px-5 mt-2 hover:translate-x-1 transition transform ease-in-out duration-350"
            >
              <div className="uppercase text-xs text-gray-700 group-hover:text-white">
                View my Work
              </div>
              <div className="">
                {mouseEvent ? (
                  <ArrowDownIcon
                    aria-label="arrowDown"
                    className="w-8 h-4 text-[#66ba5d] group-hover:text-white"
                  />
                ) : (
                  <ArrowRightIcon
                    aria-label="arrowRight"
                    className="w-8 h-4 text-[#66ba5d] group-hover:text-white"
                  />
                )}
              </div>
            </button>
          </Link>
        </div>
        <div className="relative h-[22rem] sm:h-[18rem] md:h-[22rem] lg:h-[27rem] xl:h-[36rem] 2xl:h-[42rem] w-full">
          <Image
            src="/home/brhane-giday_opt.png"
            alt="Brhane Giday Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
