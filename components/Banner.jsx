import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="/images/banner.jpg"
        layout="fill"
        alt="banner airbnb"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center ">
        <h2 className="text-sm md:text-lg font-semibold mb-3">Not sure where to go? Perfect.</h2>
        <button className="text-sm md:text-lg text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-semibold hover:shadow-lg active:scale-90 outline-none transition duration-150">I&apos;m flexible</button>
      </div>
    </div>
  );
}

export default Banner;
