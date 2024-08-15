'use client'
import React, { useState, useEffect } from "react"
import { fetchData } from "@/_utils/fetchData"
import MovieCard from "./MovieCard"
import FeaturedMovie from "./FeaturedMovie"
import Pagination from "../ui/Pagination"

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(5)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await fetchData("/movie/now_playing")
        console.log(moviesData.results)
        setMovies(moviesData.results)
      } catch (error) {
        console.error("Failed to fetch movies:", error)
      }
    }

    fetchMovies()
  }, [])

  // Get the index of the first and last movies on the current page
  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage

  // Slice the movies array to get only the movies for the current page
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)

  const featuredMovie = movies.length > 0 ? movies[0] : null
  const regularMovies = movies.length > 1 ? currentMovies : []

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      {featuredMovie && (
        <div className="mb-8">
          <FeaturedMovie movie={featuredMovie} />
        </div>
      )}
      <div className="flex flex-row justify-between items-center mb-5">
        <h1 className="text-white font-bebas tracking-wide text-2xl">Popular Now</h1>
        <p className="text-primary_green font-medium underline text-sm cursor-pointer">See All</p>
      </div>
      <div className="flex flex-row flex-wrap lg:gap-7">
        {regularMovies.length > 0 &&
          regularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default MovieList
