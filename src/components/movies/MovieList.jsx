"use client"
import React, { useState, useEffect } from "react"
import { fetchData } from "@/_utils/fetchData"
import MovieCard from "./MovieCard"
import FeaturedMovie from "./FeaturedMovie"

const MovieList = ({ genresData }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await fetchData("/trending/all/day")
        console.log(moviesData.results)
        setMovies(moviesData.results)
      } catch (error) {
        console.error("Failed to fetch movies:", error)
      }
    }

    fetchMovies()
  }, [])

  const featuredMovie = movies.length > 0 ? movies[0] : null
  const regularMovies = movies.length > 1 ? movies.slice(1) : []

  return (
    <div>
      {featuredMovie && (
        <div className="mb-8">
          <FeaturedMovie movie={featuredMovie} />
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-5">
        {regularMovies.length > 0 &&
          regularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      {regularMovies.length > 0 && (
        <div className="mt-8 text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            See All
          </button>
        </div>
      )}
    </div>
  )
}

export default MovieList
