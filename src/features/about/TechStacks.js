import Image from "next/image";
import { techStacks } from "data/data";

function TechStacks() {
  return (
    <div className="pt-5 pb-10 2xl:container lg:px-16 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-10 gap-x-4 xl:px-12">
        <div className="lg:w-4/5">
          <div className="flex items-baseline space-x-1">
            <h4 className="text-xl md:text-3xl py-2 text-gray-700 font-semibold">
              Tech Stacks
            </h4>
            <div className="w-2 h-2 rounded-full bg-[#66ba5d]"></div>
          </div>
          <p className="text-gray-700 text-sm pb-4">
            I have maintained, developed and launched multiple projects from
            scratch, carrying the development of its' back-end and front-end
            codebases.
          </p>
          <div className="flex space-x-1 items-baseline">
            <h3 className="font-semibold text-gray-700">Fast-</h3>
            <p className="text-sm text-gray-700">
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className="flex space-x-1 items-baseline">
            <h3 className="font-semibold text-gray-700">Responsive-</h3>
            <span className="text-sm text-gray-700">
              My layouts will work on any device, big or small.
            </span>
          </div>
          <div className="flex space-x-1 items-baseline">
            <h3 className="font-semibold text-gray-700">Dynamic-</h3>
            <p className="text-sm text-gray-700">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
          <div className="flex space-x-1 items-baseline">
            <h3 className="font-semibold text-gray-700">Intuitive-</h3>
            <p className="text-sm text-gray-700">
              Strong preference for easy to use, intuitive UX/UI.
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm lg:text-lg text-gray-700 font-semibold mt-8 lg:mt-0 pb-4 w-full sm:w-4/5">
            Here are a list of tools, libraries and platforms I have had
            precious experience on.
          </p>
          <div className="grid grid-cols-2 gap-x-4 lg:gap-x-2">
            <div>
              <h3 className="font-semibold text-gray-700">Frameworks</h3>
              <p className="text-sm text-gray-700">React</p>
              <p className="text-sm text-gray-700">Next.Js</p>
              <p className="text-sm text-gray-700">Node.Js | Express.Js</p>
              <p className="text-sm text-gray-700">Vue.Js</p>
              <p className="text-sm text-gray-700">Tailwind CSS</p>
              <p className="text-sm text-gray-700">Material-UI</p>
              <p className="text-sm text-gray-700">Laravel</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Tools</h3>
              <p className="text-sm text-gray-700">TypeScript</p>
              <p className="text-sm text-gray-700">GraphQL</p>
              <p className="text-sm text-gray-700">Redux</p>
              <p className="text-sm text-gray-700">Firebase</p>
              <p className="text-sm text-gray-700">PostgreSQL</p>
              <p className="text-sm text-gray-700">Git | Github | Gitlab</p>
              <p className="text-sm text-gray-700">Netlify | Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStacks;
