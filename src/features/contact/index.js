import { socialIcons } from "data/data";
import Image from "next/image";

function ContactMe() {
  return (
    <div className="py-10 container px-20 mx-auto">
      <h3 className="text-center text-sm text-[#66ba5d] font-semibold">
        WHATS NEXT
      </h3>
      <h3 className="text-center text-4xl">Lets work together!</h3>
      <p className="w-3/5 mx-auto text-center text-sm mt-2">
        I am usually active on the mediums listed below. Use your preference to
        contact me
      </p>
      <div className="w-2/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-3">
        {socialIcons
          .filter((item, index) => index < 3)
          .map((icon) => (
            <div
              key={icon.id}
              className={`py-2 px-5 rounded-full grid grid-cols-2 items-center justify-between`}
            >
              <div className="relative h-[30px] ">
                <a href={icon.url} rel="noopener" target="_blank">
                  <Image
                    src={icon.image}
                    alt={icon.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </div>
              <h3 className="text-gray-700 text-sm">
                <a href={icon.url} rel="noopener" target="_blank">
                  {icon.text}
                </a>
              </h3>
            </div>
          ))}

        {/* <div className=" py-2 px-5 bg-[#1c80b5] rounded-full grid grid-cols-2 items-center justify-between">
          <div className="relative h-[30px] ">
            <Image
              src="/contact/linkedin_icon.svg"
              alt="Github Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className="text-white text-sm">Linkedin</h3>
        </div> */}
      </div>
    </div>
  );
}

export default ContactMe;
