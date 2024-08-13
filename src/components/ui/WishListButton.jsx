import React from "react"
import { FaPlus } from "react-icons/fa"

const WishListButton = () => {
  return (
    <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-dark_blue hover:bg-primary_blue/40 relative z-20">
      <FaPlus className="text-light_purple text-xl" />
    </button>
  )
}

export default WishListButton
