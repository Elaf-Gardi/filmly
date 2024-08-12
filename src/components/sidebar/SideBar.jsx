'use client'
import React, { useState } from "react"
import { IoHome } from "react-icons/io5"
import { BsBookmarkHeartFill } from "react-icons/bs"
import { FaHeart } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io";
import { LuClapperboard } from "react-icons/lu";

const SideBar = () => {
  const [active, setActive] = useState("Home");

  const handleSetActive = (section) => {
    setActive(section);
  };

  return (
    <>
      <div className="w-64 h-full flex flex-col fixed bg-primary_blue p-8">
        <div className="mb-20">
          <LuClapperboard className="text-2xl font-bold text-primary_orange"/>
          <h1 className="font-bebas text-4xl font-bold tracking-widest italic text-white">
            FILM<span className="text-primary_orange">LY</span>
          </h1>
        </div>

        <div className="flex flex-col mb-52">
          <div 
            className={`flex flex-row gap-4 items-center mb-2 p-2 rounded cursor-pointer ${
              active === "Home" ? "bg-primary_orange" : ""
            }`} 
            onClick={() => handleSetActive("Home")}
          >
            <IoHome className="text-white text-lg"/>
            <h2 className="text-lg text-white font-roboto font-normal">Home</h2>
          </div>
          <div 
            className={`flex flex-row gap-4 items-center mb-2 p-2 rounded cursor-pointer ${
              active === "Wishlist" ? "bg-primary_orange" : ""
            }`} 
            onClick={() => handleSetActive("Wishlist")}
          >
            <BsBookmarkHeartFill className="text-white text-lg"/>
            <h2 className="text-lg text-white font-roboto font-normal">Wishlist</h2>
          </div>
          <div 
            className={`flex flex-row gap-4 items-center mb-2 p-2 rounded cursor-pointer ${
              active === "Favorite" ? "bg-primary_orange" : ""
            }`} 
            onClick={() => handleSetActive("Favorite")}
          >
            <FaHeart className="text-white text-lg"/>
            <h2 className="text-lg text-white font-roboto font-normal">Favorite</h2>
          </div>
          <div 
            className={`flex flex-row gap-4 items-center p-2 rounded cursor-pointer ${
              active === "Actors" ? "bg-primary_orange" : ""
            }`} 
            onClick={() => handleSetActive("Actors")}
          >
            <FaUser className="text-white text-lg"/>
            <h2 className="text-lg text-white font-roboto font-normal">Actors</h2>
          </div>
        </div>

        <div className={`flex flex-row gap-4 items-center p-2 rounded cursor-pointer ${
              active === "Settings" ? "bg-primary_orange" : ""
            }`} 
            onClick={() => handleSetActive("Settings")}
          >
          <IoMdSettings className="text-white text-lg"/>
          <h2 className="text-lg text-white font-roboto font-normal">Settings</h2>
        </div>
      </div>
    </>
  )
}

export default SideBar
