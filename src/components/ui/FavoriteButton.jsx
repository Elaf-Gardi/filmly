import React from 'react'
import { GoHeartFill } from "react-icons/go";

const FavoriteButton = () => {
  return (
    <button className='flex items-center justify-center w-12 h-12 rounded-lg bg-red-400/50 hover:bg-red-400/60 relative z-20'><GoHeartFill className='text-red-500 text-xl'/></button>
  )
}

export default FavoriteButton