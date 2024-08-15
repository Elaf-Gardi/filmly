import React from "react"
import { FaPlus } from "react-icons/fa"

const WishListButton = () => {
  return (
    <button className="flex items-center justify-center w-16 h-12 rounded-lg bg-primary_gray hover:bg-primary_gray/40 relative z-20">
      <FaPlus className="text-primary_green text-xl" />
    </button>
  )
}

export default WishListButton
