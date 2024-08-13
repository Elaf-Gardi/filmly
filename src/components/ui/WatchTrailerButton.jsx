import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const WatchTrailerButton = () => {
  return (
    <button className="flex items-center justify-center py-2 px-6 w-full h-12 rounded-lg text-white font-medium gap-2 bg-[#57708D] hover:bg-[#3F3D56] relative z-20">
      Watch Trailer <FaArrowRight className="text-white text-lg" />
    </button>
  );
}

export default WatchTrailerButton;
