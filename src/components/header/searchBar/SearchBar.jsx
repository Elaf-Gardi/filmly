import React from "react"
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div class="relative w-1/2 max-w-xl mx-auto bg-primary_blue rounded">
      <input
        placeholder="Find movie or show"
        class="rounded w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-primary_blue shadow-md hover:outline-none focus:ring-gray-50 focus:border-gray-100"
        type="text"
      />
      <button
        type="submit"
        class="absolute inline-flex items-center h-10 p-2 transition duration-150 ease-in-out rounded outline-none right-3 top-3 bg-primary_orange sm:px-6 sm:text-base sm:font-medium hover:bg-dark_orange focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        <CiSearch className="text-xl text-white font-bold"/>
      </button>
    </div>
  )
}

export default SearchBar
