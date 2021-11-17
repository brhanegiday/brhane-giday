import { useState } from "react";

function Header() {
  const [dark, setDark] = useState(false);
  return (
    <header className="bg-white py-6 sticky top-0 z-50 ">
      <div className="flex items-center justify-between container mx-auto px-4">
        <div>
          <h3 className="font-semi-bold">Brhane.Giday</h3>
        </div>
        <div className="flex space-x-6">
          <div>
            <a href="#home" className="text-gray-700 text-sm">
              Home
            </a>
          </div>
          <div>
            <a href="#about" className="text-gray-700 text-sm">
              About
            </a>
          </div>
          <div>
            <a href="#work" className="text-gray-700 text-sm">
              Work
            </a>
          </div>
          <div>
            <a href="#blogs" className="text-gray-700 text-sm">
              Blogs
            </a>
          </div>
          <div>
            <a href="#contact" className="text-gray-700 text-sm">
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex items-center  space-x-4">
          <a
            href="mailto:brhane5giday@gmail.com"
            rel="noopener"
            target="_blank"
            className="px-4 py-1 rounded-full bg-[#66ba5d] text-sm text-white"
          >
            Let's Talk
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer text-[#66ba5d]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clipRule="evenodd"
            />
          </svg>
          {!dark ? (
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#66ba5d] cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <p className="text-sm cursor-pointer">Light</p>
            </div>
          ) : (
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#66ba5d] cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <p className="text-sm cursor-pointer">Dark</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
