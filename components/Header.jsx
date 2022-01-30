import Image from "next/image";
import React from "react";
import {GlobeAltIcon, MenuAlt4Icon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-10 grid grid-cols-3 gap-x-3 bg-white p-4 md:px-6 shadow-md">
      {/* left */}
      <div className="relative flex items-center h-10">
        <Image
          src="/logo-airbnb.png"
          alt="logo airbnb"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="py-2 px-2 border-2 rounded-full flex items-center">
        <input
          type="text"
          placeholder="Start your search"
          className="w-full outline-none px-1.5 text-gray-600"
        />
        {/* search icon */}
        <SearchIcon className="hidden md:inline-block h-6 bg-red-400 text-white rounded-full cursor-pointer p-1"/>
      </div>
      {/* right */}
      <div className="flex items-center justify-end gap-2 text-gray-500">
        <p className="flex items-center gap-1 cursor-pointer">
          <span className="hidden md:inline-block">Become a host</span>
          {/* globle icon */}
          <GlobeAltIcon className="h-5"/>
        </p>
        <div className="flex items-center p-2 gap-1 border-2 rounded-full">
          {/* menu icon */}
          <MenuIcon className="h-5"/>
          {/* user icon */}
          <UserCircleIcon className="h-5"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
