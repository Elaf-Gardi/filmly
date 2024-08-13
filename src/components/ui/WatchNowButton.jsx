import React from "react"
import { FaPlay } from "react-icons/fa6"
const WatchNowButton = () => {
  return (
    <button className="flex items-center justify-center py-2 px-6 w-full h-12 rounded-lg text-white font-medium gap-2 bg-light_purple hover:bg-light_purple/40 relative z-20">
      Watch Now
      <FaPlay className="text-white text-sm" />
    </button>
  )
}

export default WatchNowButton
