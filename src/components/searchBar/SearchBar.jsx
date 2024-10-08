import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="relative w-full m-4 sm:max-w-md lg:max-w-6xl mx-auto bg-primary_gray rounded">
      <input
        placeholder="Find movie or show"
        className="rounded w-full h-12 bg-transparent py-2 pl-8 pr-20 sm:pr-32 outline-none border-none text-white placeholder-light_gray"
        type="text"
      />
      <button
        type="submit"
        className="absolute inline-flex items-center h-8 p-2 rounded-full outline-none right-3 top-2 bg-primary_green sm:px-6 sm:text-base sm:font-medium hover:bg-lime-400 focus:outline-none"
        style={{ marginLeft: '8px' }}
      >
        <CiSearch className="text-2xl font-bold text-darkGray" />
      </button>
    </div>
  );
};

export default SearchBar;
