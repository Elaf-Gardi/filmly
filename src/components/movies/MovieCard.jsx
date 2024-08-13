/* eslint-disable @next/next/no-img-element */
import React from "react"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

const MovieCard = ({ movie, genres }) => {
  const { id, title, poster_path, vote_average} = movie
  const formattedRating = vote_average.toFixed(1)

  return (
    <div className="relative w-44 h-72 rounded-2xl transition-transform hover:scale-105 cursor-grabbing">
      <img
        src={
          poster_path
            ? `${IMAGE_BASE_URL}${poster_path}`
            : "/showtime-logo-yellow.png"
        }
        alt={`Poster of ${title}`}
        className="absolute top-0 left-0 w-full h-full object-fit rounded-2xl cursor-pointer z-10"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30  rounded-2xl transition-opacity duration-300 z-20 hover:opacity-0"></div>
      <div className="absolute top-0 left-0 bg-yellow-400 text-black rounded-br-lg px-2 py-1 text-sm font-bold z-20">
        {formattedRating}
      </div>
      <p>{genres}</p>
    </div>
  )
}

export default MovieCard
