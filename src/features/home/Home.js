import Image from "next/image";

function Home() {
  return (
    <div className="px-4 py-5 lg:py-8">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-36">
        <div className="text-gray-900">
          <h1 className="text-lg pb-1">Hello, it's me</h1>
          <div className="flex space-x-1 items-baseline">
            <h2 className="text-4xl font-thin">Brhane Giday</h2>
            <div className="w-3 h-3 rounded-full bg-[#66ba5d]"></div>
          </div>
          <p className="w-4/5 text-sm py-2 font-bold-600">
            I am an experienced Fullstack Engineer with a demonstrated history
            of working in Web development and UI/UX designing & prototyping.
          </p>
        </div>
        <div className="relative h-[450px]">
          <Image
            src="/home/brhane-giday_opt.png"
            alt="Brhane Giday Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
