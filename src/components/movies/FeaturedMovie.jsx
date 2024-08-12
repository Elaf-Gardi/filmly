/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w780"

const FeaturedMovie = ({ movie }) => {
  return (
    <div className="relative  w-full h-96 rounded overflow-hidden">
      <img
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={`Poster of ${movie.title}`}
        className="absolute top-0 left-0 w-full h-full object-cover "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute bottom-10 left-10 text-white z-20">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="mb-4">{movie.overview}</p>
        <Link href={`/movies/${movie.id}`} passHref>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Watch Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedMovie
