import { socialIcons } from "data/data";
import Link from "next/link";

function ContactMe() {
  return (
    <div className="py-10 container px-20 mx-auto" id="contact">
      <h3 className="text-center text-sm text-[#66ba5d] font-semibold">
        WHATS NEXT
      </h3>
      <div className="flex space-x-1 items-baseline justify-center">
        <h3 className="text-center text-3xl text-gray-700 font-semibold">
          Lets work together
        </h3>
        <div className="w-2 h-2 rounded-full bg-[#66ba5d]"></div>
      </div>
      <p className="w-3/5 mx-auto text-center text-sm mt-2 text-gray-700">
        If you wanna get in touch, talk to me about a project collaboration or
        just say hi,
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 items-center py-8 w-3/6 mx-auto">
        <div>
          {socialIcons.map((icon) => (
            <Link href={icon.url} key={icon.id}>
              <a
                rel="noopener"
                target="_blank"
                className="bg-white w-3/5 py-2 px-5 rounded-full flex items-center gap-x-5 mb-4 shadow-md hover:translate-x-2 duration-300 ease-in-out"
              >
                <img
                  src={icon.image}
                  alt={icon.alt}
                  width="20px"
                  height="20px"
                  className="grayscale-100"
                />

                <p className="text-gray-700 text-sm">{icon.text}</p>
              </a>
            </Link>
          ))}
        </div>
        <div className="">
          <h4 className="font-semibold text-sm">Do you prefer an email?</h4>
          <p className="text-sm pb-4">Reach out at my address below</p>
          <Link href="mailto:brhane5giday@gmail.com">
            <a
              target="_blank"
              rel="noopener"
              className="bg-white py-2 px-5 shadow-md w-3/5 rounded-full flex items-center gap-x-5  hover:translate-x-2 duration-300 ease-in-out"
            >
              <div className="flex gap-x-4 items-center">
                <img
                  src="/contact/gmail_icon.svg"
                  alt="Gmail Icon"
                  height="20px"
                  width="20px"
                  className="grayscale-0"
                />

                <p className="text-gray-700 text-sm">Compose</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
