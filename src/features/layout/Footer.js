import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="px-4 pt-10 pb-6 bg-[#f5f5f5]">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-11/12 mx-auto">
        <div className="grid grid-cols-2 gap-x-1 items-center">
          <div className="relative bg-[#66ba5d] w-[5rem] h-[5rem] rounded-full">
            <Image
              src="/home/brhane-giday.png"
              alt="Brhane Giday"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="">
            <h3 className="text-xs">Brhane Giday</h3>
            <h3 className="text-md">Full Stack Web Developer</h3>
          </div>
        </div>
        <h3 className="text-sm mx-auto w-4/5">
          Site made with Next.js and Tailwind CSS. Hosted on Netlify. Full
          source code available on Github
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
