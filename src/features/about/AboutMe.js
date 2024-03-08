import React from "react";
import { Link } from "react-scroll";

function AboutMe() {
  return (
    <div className="py-10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="md:w-4/5 w-full">
          <h2 className="text-left text-xs md:text-sm pb-1 text-lochmara-500 font-bold">
            MY SKILLSET
          </h2>
          <h3 className="text-md sm:text-xl md:text-2xl text-gray-700 font-semibold">
            Fullstack developer and UI/UX designer
          </h3>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="md:block hidden"
          >
            <button
              type="button"
              className="flex group space-x-1 mt-3 items-center hover:bg-lochmara-500 shadow-md rounded-full hover:translate-x-1 transition transform ease-in-out duration-350 border-b-4 border-t-[1px] border-lochmara-500 py-2 px-5"
            >
              <p className="uppercase text-xs font-semibold text-lochmara-500 group-hover:text-white">
                Let's work together
              </p>
            </button>
          </Link>
        </div>
        <div>
          <p className="pt-4 text-sm text-gray-700">
            I specialize in constructing intricate web applications and leading
            front-end teams. I actively pursue new opportunities for
            collaboration on projects involving captivating dashboards,
            innovative design systems, or impactful landing pages.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            As a Software developer, I leverage my meticulous attention to
            detail, my unwavering passion for creation, and my mission-oriented
            work ethic to effect meaningful change in the world. I am
            enthusiastic about making a significant impact at a rapidly growing
            company.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Fluent in the languages of designers, developers, and users, I
            foster intelligent collaboration. I am a humble team player who
            leads by influence and possesses a genuine passion for crafting
            innovative solutions.
          </p>
          <div className="block md:hidden">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                type="button"
                className="flex group space-x-1 mt-3 items-center hover:bg-lochmara-500 shadow-md rounded-full hover:translate-x-1 transition transform ease-in-out duration-350 border-b-4 border-t-[1px] border-lochmara-500 py-2 px-5"
              >
                <p className="uppercase text-xs text-gray-700 group-hover:text-white">
                  Let's make something special
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
