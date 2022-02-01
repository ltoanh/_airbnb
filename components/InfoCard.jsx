import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

function InfoCard({ item }) {
  return (
    <div className="flex py-7 px-4 rounded-lg hover:shadow-lg transition duration-150 border-b flex-col md:flex-row">
      <div className="relative h-20 w-40 md:w-80 md:h-52 flex-shrink-0">
        <Image
          className="rounded-lg"
          objectFit="cover"
          src={item.img}
          alt={item.title}
          layout="fill"
        />
      </div>
      <div className="md:pl-5 flex flex-col flex-grow">
        <div className="flex justify-between">
          <p className="text-sm text-gray-600">{item.location}</p>
          <HeartIcon className="h-5 md:6 cursor-pointer" />
        </div>
        <h4 className="font-semibold md:text-lg">{item.title}</h4>

        <div className="border-b w-10 pt-2"></div>

        <p className="pt-2 text-sm text-gray-600 flex-grow">{item.description}</p>

        <div className="flex justify-between items-end pt-3">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {item.star}
          </p>
          <div>
            <p className="md:text-lg font-semibold md:pb-2">{item.price}</p>
            <p className="text-right font-extralight">{item.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
