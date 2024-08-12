/* eslint-disable @next/next/no-img-element */
import React from "react"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

const MovieCard = ({ movie }) => {
  return (
    <div className="relative w-52 h-80 rounded-2xl transition-transform hover:scale-105 cursor-grabbing">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={`Poster of ${movie.title}`}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl cursor-pointer z-10"
      />
    </div>
  )
}

export default MovieCard
