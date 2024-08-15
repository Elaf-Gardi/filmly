import React from "react"
import MovieList from "../movies/MovieList"
import SearchBar from "../searchBar/SearchBar"
import Genres from "../ui/Genres"
const Hero = () => {
  return (
    <main className="flex flex-col lg:ml-64 px-10 mb-5">
      <div className="flex flex-row justify-between gap-4 items-center mb-4">
        <SearchBar />
        <Genres />
      </div>
      <MovieList />
    </main>
  )
}
export default Hero
