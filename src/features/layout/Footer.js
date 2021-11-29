import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="px-4 py-6 bg-[#f5f5f5]">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-11/12 mx-auto">
        <div className="flex gap-x-3 items-center">
          <div className="bg-[#66ba5d] h-[80px] w-[80px] rounded-full">
            <img
              src="/home/brhane-giday.png"
              alt="Brhane Giday"
              height="200px"
              width="200px"
              // objectFit="cover"
            />
          </div>
          <div className="">
            <h3 className="text-xs  mb-1">Brhane Giday</h3>
            <h4 className="text-sm text-gray-700 font-semibold">
              Full Stack Web Developer
            </h4>
          </div>
        </div>
        <h3 className="text-sm text-gray-700 font-semibold mx-auto w-3/5">
          Designed & Developed by Brhane Giday{" "}
          <span className="text-[#66ba5d]">@2021</span>
        </h3>
        <div className="relative h-[4rem]">
          <Image
            src="/home/footer-logo.png"
            alt="looo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
