import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-[#f5f5f5] ">
      <div className="xl:container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-10 lg:px-20 w-full">
          <div className="flex gap-x-3 items-center">
            <div className="bg-[#66ba5d] h-[55px] w-[55px] md:h-[80px] md:w-[80px] rounded-full">
              <img
                src="/home/brhane-giday.png"
                alt="Brhane Giday"
                height="80px"
                width="80px"
              />
            </div>
            <div>
              <h3 className="text-xs  mb-1">Brhane Giday</h3>
              <h4 className="text-sm text-gray-700 sm:font-semibold">
                Full Stack Web Developer
              </h4>
            </div>
          </div>
          <h3 className="text-sm text-gray-700 mx-auto w-full sm:w-4/6 mt-5">
            Designed & Developed by Brhane Giday{" "}
            <span className="text-[#66ba5d]">@2021</span>
          </h3>
          <div className="hidden lg:block">
            <Image
              src="/home/footer-logo.png"
              alt="Footer logo"
              height={106}
              width={213}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
