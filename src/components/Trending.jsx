import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav"
import Dropdown from "../templates/Dropdown"
import Axios from "../utils/Axios";
import Cards from "../templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  document.title = "SCSDB | Trending " + category.toLocaleUpperCase();


  const GetTrending = async () => {
    try {
        const { data } = await Axios.get(`/trending/${category}/${duration}?page=${page}`);
        // settrending(data.results);

        if (data.results.length > 0) {
        setpage(page + 1);
        settrending((prevState) => [...prevState, ...data.results]);
        }
        else{
          sethasMore(false);
        }
        

    } catch (error) {
        console.log("Error: ", error);
    }
  };

  const refreshHandler =  () => {
    if(trending.length === 0) {
      GetTrending();
    }
    else{
      setpage(1);
      settrending([]);
      GetTrending()
    }
  }

   
    useEffect(()=>{
      refreshHandler();
    },[category, duration])
  

  return trending.length > 0 ?(
    <div className=" w-screen ">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
        <i onClick={()=>{navigate(-1)}} className="ri-arrow-left-line hover:text-[#6556CD] mr-3"></i>
          Trending</h1>

          <div className="flex items-center w-[80%] gap-2">
            <Topnav />
            <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=> setcategory(e.target.value)} />
            <Dropdown title="Duration" options={["week", "day"]} func={(e)=> setduration(e.target.value)} />

          </div>
      </div>
      <InfiniteScroll 
       dataLength={trending.length}
       next={GetTrending}
       hasMore={hasMore}
       loader={<h1>Loading....</h1>}
       
      >
      <Cards data={trending} title={category} />

      </InfiniteScroll>

    </div>
  ):<Loading />
};

export default Trending;
