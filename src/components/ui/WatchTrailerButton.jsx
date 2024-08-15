import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const WatchTrailerButton = () => {
  return (
    <button className="flex items-center justify-center py-2 px-6 w-full h-12 rounded-lg text-darkGray font-medium gap-2 bg-white/90 hover:bg-white/80 relative z-20">
      Watch Trailer <FaArrowRight className="text-darkGray text-lg" />
    </button>
  );
}

export default WatchTrailerButton;
