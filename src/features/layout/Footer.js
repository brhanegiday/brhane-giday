import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="px-4 py-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-3/5 mx-auto">
        <h3 className="text-sm">
          Site made with Next.js and Tailwind CSS. Hosted on Netlify. Full
          source code available on Github
        </h3>
        <div className="relative h-[50px]">
          <Image
            src="/home/logo-opt.png"
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
