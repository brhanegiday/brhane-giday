import React from "react";

function AboutMe() {
  return (
    <div className="py-16 bg-[#66ba5d] text-white">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="w-4/5">
          <h2 className="text-sm pb-1"> About Me</h2>
          <h3 className="text-4xl">
            Fullstack Engineer with passion for Problem Solving
          </h3>
          <div className="mt-4 border-b-2 w-2/4 hover:translate-x-3 transition-transform ease-in-out duration-250">
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
        <div>
          <p className="py-4 text-sm">
            I am a professional with a passion to create marvelous software and
            programming solutions to different real life problems and I can
            build products that can meet your needs. I have a solid
            understanding of software development with experience in modern
            frameworks.
          </p>
          <p className="text-sm">
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
