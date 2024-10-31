import Hero from "@/app/components/hero/hero";

function About() {
  return (
    <div className="min-h-screen flex flex-col transition-all duration-1000 ease-in-out bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 text-center border-b-2 border-[#90cc75]">
        <h1 className="text-5xl md:text-5xl font-bold text-green-400 mb-4">
          MZS CodeWorks
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 italic mb-8">
        &quot;Crafting Dreams in Code, One Pixel at a Time. 🚀&quot;
        </p>
        {/* <hr className="border-green-400 w-1/2 mx-auto " /> */}
      </div>
      
      <div className="flex-grow">
        <Hero />
      </div>
    </div>
  );
}

export default About;
