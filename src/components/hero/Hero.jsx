import React from "react"
import MovieList from "../movies/MovieList"
import SearchBar from "../searchBar/SearchBar"
const Hero = () => {
  return (
    <main className="flex flex-col lg:ml-60 px-10">
      <SearchBar />
      <MovieList />
    </main>
  )
}
export default Hero
