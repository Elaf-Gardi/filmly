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
        const moviesData = await fetchData("/movie/now_playing")
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
      <div className="flex flex-row flex-wrap lg:gap-7">
        {regularMovies.length > 0 &&
          regularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      
    </div>
  )
}

export default MovieList
