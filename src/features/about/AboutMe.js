import React from "react";

function AboutMe() {
  return (
    <div className="py-16 ">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="w-4/5">
          <h2 className="text-sm pb-1 text-[#66ba5d] font-semibold">
            MY SKILLSET
          </h2>
          <h3 className="text-4xl">
            Fullstack Engineer with passion for Problem Solving
          </h3>
          <div className="mt-4 border-b-[0.12rem] border-[#66ba5d] w-2/4">
            <div className="hover:translate-x-1 transition-transform ease-in-out duration-350">
              <a
                href="https://www.instagram.com/brhane__giday/"
                target="_blank"
                rel="noopener"
                className="uppercase text-sm"
              >
                follow me on instagram
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="py-4 text-sm text-gray-700">
            {" "}
            I specialize in building complex web applications, leading front-end
            teams. I worked with numerous clients from all around the world from
            early startups to well-established companies. I always seek new
            opportunities for cooperation on projects around interesting
            dashboards, design systems or landing pages. Let’s create something
            awesome together!
          </p>
          <p className="text-sm text-gray-700">
            Proven ability to take an idea from conception to application to
            revenue driver, making thoughtful business and design decisions
            throughout development and lifecycle. Speaking the languages of
            designers, developers, and users in fostering smart collaboration. A
            humble team player leading by influence and genuine passion for
            crafting solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
