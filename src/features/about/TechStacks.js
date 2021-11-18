import Image from "next/image";
import { techStacks } from "data/data";

function TechStacks() {
  return (
    <div className="py-10">
      <h3 className="text-4xl py-2 text-center"> Tech Stacks</h3>
      <p className="text-center text-gray-700">
        Here are a list of tools, libraries and platforms I have had precious
        experience on.
      </p>
      <div className="py-12 px-20 grid grid-cols-3 md:grid-cols-7">
        {techStacks?.map((item, index) => (
          <div key={`tech-logos-${index}`}>
            <div className="relative h-[3rem] w-[100%]">
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="contain"
                className="filter grayscale hover:grayscale-0 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
              />
            </div>
            <h4 className="text-center text-sm mt-2">{item.desc}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStacks;
