import { useState } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Link } from "react-scroll";

function Home() {
  const [mouseEvent, setMouseEvent] = useState(false);

  return (
    <div className="py-5 lg:py-8" id="home">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-28">
        <div className="text-gray-900">
          <h1 className="text-lg pb-1  text-gray-700 font-semibold">
            Hello, it's me
          </h1>
          <div className="flex space-x-1 items-baseline">
            <h2 className="text-4xl text-gray-700 font-semibold ">
              Brhane Giday
            </h2>
            <div className="w-3 h-3 rounded-full bg-[#66ba5d]"></div>
          </div>
          <p className="w-4/5 text-sm py-2 text-gray-700">
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
              onMouseOver={() => setMouseEvent(true)}
              onMouseLeave={() => setMouseEvent(false)}
              className="flex group space-x-1 items-center shadow-md rounded-full hover:bg-[#66ba5d] border-b-4 border-t-[1px] border-[#66ba5d] py-2 px-5 mt-2 hover:translate-x-1 transition transform ease-in-out duration-350"
            >
              <div className="uppercase text-xs text-gray-700 group-hover:text-white">
                View my Work{" "}
              </div>
              <div className="">
                {mouseEvent ? (
                  <ArrowDownIcon className="w-8 h-4 text-[#66ba5d] group-hover:text-white" />
                ) : (
                  <ArrowRightIcon className="w-8 h-4 text-[#66ba5d] group-hover:text-white" />
                )}
              </div>
            </button>
          </Link>
        </div>
        <div className="relative h-[450px]">
          <Image
            src="/home/brhane-giday_opt.png"
            alt="Brhane Giday Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
