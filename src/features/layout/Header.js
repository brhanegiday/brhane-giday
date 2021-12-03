import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { GlobeAltIcon } from "@heroicons/react/solid";
import { SunIcon, MoonIcon, MenuIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-[#f5f5f5] py-4 sticky top-0 z-50 drop-shadow-md">
      <nav className="flex items-center justify-between xl:container px-10 mx-auto sm:px-16 lg:px-20">
        <div className="cursor-pointer group flex space-x-2">
          <div className="block lg:hidden cursor-pointer">
            <MenuIcon
              role="button"
              className="w-5 h-5 font-extrabold text-[#66ba5d]"
              onClick={() => setOpenMenu(true)}
            />
          </div>
          <NextLink href="/">
            <a className="font-semi-bold cursor-pointer">
              Brhane
              <span className="text-[#66ba5d] font-extrabold">.</span>
              Giday
            </a>
          </NextLink>
          <div className="opacity-10 w-full h-[2px] bg-[#66ba5d] group-hover:opacity-90 hidden lg:block"></div>
        </div>
        <ul className="hidden space-x-6 lg:flex">
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
            className="px-4 py-1 sm:py-[0.2rem] rounded-full bg-[#66ba5d] text-sm text-white hidden sm:block"
          >
            Let's Talk
          </a>
          <GlobeAltIcon
            className="h-5 w-5 cursor-pointer text-[#66ba5d]"
            rore="button"
          />
          <div>
            {mounted && currentTheme === "dark" ? (
              <div className="flex items-center">
                <MoonIcon
                  className="h-5 w-5 text-[#66ba5d] cursor-pointer"
                  onClick={() => setTheme("dark")}
                  role="button"
                />
                <p className="text-xs cursor-pointer">Dark</p>
              </div>
            ) : (
              <div className="flex items-center">
                <SunIcon
                  className="h-5 w-5 text-[#66ba5d] cursor-pointer"
                  role="button"
                  onClick={() => setTheme("light")}
                />

                <p className="text-xs cursor-pointer">Light</p>
              </div>
            )}
          </div>
        </div>
      </nav>
      {openMenu && <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </header>
  );
}

export default Header;
