import { useState } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { GlobeAltIcon } from "@heroicons/react/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

function Header() {
  const [dark, setDark] = useState(false);
  return (
    <header className="bg-[#f5f5f5] py-4 sticky top-0 z-50 drop-shadow-md">
      <div className="flex items-center justify-between container mx-auto px-4">
        <div className="cursor-pointer group">
          <NextLink href="/">
            <a className="font-semi-bold cursor-pointer">Brhane.Giday</a>
          </NextLink>
          <div className="opacity-10 w-full h-[2px] bg-[#66ba5d] group-hover:opacity-90"></div>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 text-sm hover:text-[#66ba5d] ease-in-out duration-150 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 text-sm hover:text-[#66ba5d] ease-in-out duration-150 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="my-work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 text-sm hover:text-[#66ba5d] ease-in-out duration-150 cursor-pointer"
            >
              Work
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 text-sm hover:text-[#66ba5d] ease-in-out duration-150 cursor-pointer"
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="flex items-center  space-x-4">
          <a
            href="mailto:brhane5giday@gmail.com"
            rel="noopener"
            target="_blank"
            className="px-4 py-1 rounded-full bg-[#66ba5d] text-sm text-white"
          >
            Let's Talk
          </a>
          <GlobeAltIcon className="h-6 w-6 cursor-pointer text-[#66ba5d]" />

          {dark ? (
            <div className="flex items-center" onClick={() => setDark(false)}>
              <MoonIcon className="h-6 w-6 text-[#66ba5d] cursor-pointer" />
              <p className="text-xs cursor-pointer">Dark</p>
            </div>
          ) : (
            <div className="flex items-center" onClick={() => setDark(true)}>
              <SunIcon className="h-6 w-6 text-[#66ba5d] cursor-pointer" />

              <p className="text-xs cursor-pointer">Light</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
