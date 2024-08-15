import React from "react"
import { FaPlay } from "react-icons/fa6"
const WatchNowButton = () => {
  return (
    <button className="flex items-center justify-center py-2 px-6 w-full h-12 rounded-lg text-darkGray font-medium gap-2 bg-primary_green hover:bg-primary_green/80 relative z-20">
      Watch Now
      <FaPlay className="text-darkGray text-sm" />
    </button>
  )
}

export default WatchNowButton
