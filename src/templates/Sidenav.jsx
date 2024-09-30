import axios from "../utils/Axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
   
  return (
    <div className="w-[20%] h-full border-r-[1px] border-zinc-400 p-8">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>SCSDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-md gap-2">
        <h1 className="font-semibold text-xl mt-10 mb-5 text-white">
          New Feeds
        </h1>

        <Link to = "/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg px-4 py-3">
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link to = "/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg px-4 py-3">
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link to = "/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg px-4 py-3">
        <i className="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link to = "/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg px-4 py-3">
        <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link to = "/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg px-4 py-3">
        <i className="mr-2 ri-team-fill"></i>Peoples
        </Link>
      </nav>
      <hr className="border-none bg-zinc-400 h-[1px]" />

      <nav className="flex flex-col text-zinc-400 text-md gap-2">
        <h1 className="font-semibold text-lg mt-6 mb-5 text-white">
          Website Information
        </h1>

        <Link to = "/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg px-4 py-3">
        <i className="mr-2 ri-information-fill"></i>About SCSDB
        </Link>
        <Link to = "/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg px-4 py-3">
        <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidenav;
