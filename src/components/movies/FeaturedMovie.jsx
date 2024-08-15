/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import FavoriteButton from "../ui/FavoriteButton"
import WishListButton from "../ui/WishListButton"
import WatchNowButton from "../ui/WatchNowButton"
import WatchTrailerButton from "../ui/WatchTrailerButton"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w780"

const FeaturedMovie = ({ movie }) => {
  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden">
      <img
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={`Poster of ${movie.title}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      <div className="absolute bottom-2 right-0 w-3/4 px-4 text-white z-20">
        <h1 className="text-4xl font-bebas font-medium tracking-wide">
          {movie.title}
        </h1>
        <p className="text-sm text-white text-opacity-60 font-thin">
          {movie.overview}
        </p>
      </div>

      <div className="absolute top-4 left-4">
        <div className="flex flex-row items-center bg-white/30 backdrop-blur-md rounded-lg w-full p-2 border border-white shadow-lg">
          <span className="text-sm">🔥</span>
          <p className="ml-2 font-normal text-sm text-white">Hot Movie Now</p>
        </div>
      </div>

      {/**Button */}

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <WatchTrailerButton />
      </div>

      <div className="absolute top-0 right-0 inline-block">
        <FavoriteButton className="relative z-10" />
        <div className="inv-bord-right"></div>
      </div>

      <div className="absolute flex flex-row bottom-0 left-0 gap-2">
        <WatchNowButton />
        <WishListButton />
        <div className="inv-bord-left"></div>
      </div>
    </div>
  )
}

export default FeaturedMovie
