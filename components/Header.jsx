import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";

// react-date-range
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  // search value
  const [searchValue, setSearchValue] = useState("");

  // date range picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [guestNumber, setGuestNumber] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelectedDate = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetSearchValue = () => {
    setSearchValue("");
  }

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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="w-full outline-none px-1.5 text-gray-600"
        />
        {/* search icon */}
        <SearchIcon className="hidden md:inline-block h-6 bg-red-400 text-white rounded-full cursor-pointer p-1" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end gap-2 text-gray-500">
        <p className="flex items-center gap-1 cursor-pointer">
          <span className="hidden md:inline-block">Become a host</span>
          {/* globle icon */}
          <GlobeAltIcon className="h-5" />
        </p>
        <div className="flex items-center p-2 gap-1 border-2 rounded-full">
          {/* menu icon */}
          <MenuIcon className="h-5" />
          {/* user icon */}
          <UserCircleIcon className="h-5" />
        </div>
      </div>

      {searchValue && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            rangeColors={["#FD5B61"]}
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelectedDate}
          />
          <div className="flex items-center mb-2 border-b border-gray-200">
            <h3 className="text-lg flex-grow">Number of guest</h3>
            <UserIcon className="h-5" />
            <input
              className="w-12 pl-2 outline-none text-red-400"
              type="number"
              value={guestNumber}
              onChange={(e) => setGuestNumber(e.target.value)}
              min={1}
              max={99}
            />
          </div>
          <div className="flex">
            <button onClick={resetSearchValue} className="text-gray-700 flex-1 outline-none active:scale-95 transition duration-150 ease-in">
              Cancel
            </button>
            <button className="text-red-400 flex-1 outline-none active:scale-95 transition duration-150 ease-in">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
