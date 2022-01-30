import Image from "next/image";
import React from "react";

function SmallCard(props) {
  const { item } = props;

  return (
    <div className="flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      {/* left */}
      <div className="relative w-16 h-16 xl:h-20 xl:w-20">
        <Image
          className="rounded-lg"
          src={item.img}
          alt={item.location}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* right */}
      <div>
        <h4 className="font-semibold">{item.location}</h4>
        <p className="text-gray-600">{item.distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
