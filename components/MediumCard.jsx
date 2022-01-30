import Image from "next/image";
import React from "react";

function MediumCard(props) {
  const { item } = props;

  return (
    <div className="cursor-pointer ">
      <div className="relative h-80 w-80">
        <Image className="hover:scale-105 transition duration-300 ease-out" src={item.img} layout="fill" alt={item.title} />
      </div>
      <h4 className="text-lg mt-3 font-semibold">{item.title}</h4>
    </div>
  );
}

export default MediumCard;
