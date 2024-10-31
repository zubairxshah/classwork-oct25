import React from "react";
import Image from "next/image";
import profileimg from "@/app/public/shahmz.jpg";

const Hero = () => {
  return (
    <section
      className="w-full py-20 flex flex-col-reverse min-h-screen md:flex-row items-center justify-center
                        transition-all duration-1000 ease-in-out transform bg-gradient-to-b from-gray-900 to-gray-800"
      id="home"
    >
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <div className="rounded-full overflow-hidden border-4 border-green-400 shadow-xl shadow-green-400/20">
          <Image
            src={profileimg}
            alt="portfolio profile"
            width={300}
            height={300}
            className="object-cover w-64 h-64 md:w-80 md:h-80"
          />
        </div>
      </div>

      <div className="md:w-1/2 px-4 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 animate-pulse">
          Hi, I&apos;m Shah!
        </h1>
        <blockquote className="border-l-4 border-green-400 pl-4 italic">
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
            I&apos;m a passionate frontend developer dedicated to creating seamless
            user experiences and visually stunning interfaces. Every line of
            code I write is a step towards bringing innovative designs to life.
          </p>
        </blockquote>
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <figcaption className="font-medium">
            <div className="text-green-400 text-xl mb-1">M Zubair Shah</div>
            <div className="text-gray-400">Student GIAIC, Karachi</div>
          </figcaption>
        </div>
      </div>
    </section>
  );
};

export default Hero;
