"use client"
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { LuClapperboard } from "react-icons/lu";
import { RiTvFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const SideBar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (section) => {
    setActive(section);
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 text-darkGray bg-primary_green rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu className="text-2xl" />
      </button>

      <div
        className={`fixed z-40 h-full flex flex-col bg-primary_gray p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64`}
      >
        <Link href="/">
          <div className="flex items-center gap-2 mb-16">
            <LuClapperboard className="text-3xl text-primary_green" />
            <h1 className="font-bebas text-3xl font-bold tracking-widest text-white">
              FILM<span className="text-primary_green">LY</span>
            </h1>
          </div>
        </Link>

        <div className="flex flex-col mb-auto">
          <Link href="/">
          <div
            className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
              active === "Home" ? "bg-primary_green text-darkGray" : "text-light_gray"
            }`}
            onClick={() => handleSetActive("Home")}
          >
            <IoHome className="text-xl" />
            <h2 className="text-lg font-medium">Home</h2>
          </div>
          </Link>
          <div
            className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
              active === "TV shows" ? "bg-primary_green text-darkGray" : "text-light_gray"
            }`}
            onClick={() => handleSetActive("TV shows")}
          >
            <RiTvFill className="text-xl" />
            <h2 className="text-lg font-medium">TV shows</h2>
          </div>
          <div
            className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
              active === "Wishlist" ? "bg-primary_green text-darkGray" : "text-light_gray"
            }`}
            onClick={() => handleSetActive("Wishlist")}
          >
            <BsBookmarkHeartFill className="text-xl" />
            <h2 className="text-lg font-medium">Wishlist</h2>
          </div>
          <div
            className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
              active === "Favorite" ? "bg-primary_green text-darkGray" : "text-light_gray"
            }`}
            onClick={() => handleSetActive("Favorite")}
          >
            <FaHeart className="text-xl" />
            <h2 className="text-lg font-medium">Favorite</h2>
          </div>
          <div
            className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
              active === "Actors" ? "bg-primary_green text-darkGray" : "text-light_gray"
            }`}
            onClick={() => handleSetActive("Actors")}
          >
            <FaUser className="text-xl" />
            <h2 className="text-lg font-medium">Actors</h2>
          </div>
        </div>

        <div
          className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
            active === "Settings" ? "bg-primary_green text-darkGray" : "text-light_gray"
          }`}
          onClick={() => handleSetActive("Settings")}
        >
          <IoMdSettings className="text-xl" />
          <h2 className="text-lg font-medium">Settings</h2>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
