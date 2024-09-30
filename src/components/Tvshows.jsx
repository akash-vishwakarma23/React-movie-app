import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav"
import Dropdown from "../templates/Dropdown"
import Axios from "../utils/Axios";
import Cards from "../templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const Tvshows = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "SCSDB | Tv " + category.toLocaleUpperCase();
  
  
    const GetTv = async () => {
      try {
          const { data } = await Axios.get(`/tv/${category}?page=${page}`);
          // settrending(data.results);
  
          if (data.results.length > 0) {
          setpage(page + 1);
          settv((prevState) => [...prevState, ...data.results]);
          }
          else{
            sethasMore(false);
          }
          
  
      } catch (error) {
          console.log("Error: ", error);
      }
    };
  
    const refreshHandler =  () => {
      if(tv.length === 0) {
        GetTv();
      }
      else{
        setpage(1);
        settv([]);
        GetTv()
      }
    }
  
      useEffect(()=>{
        refreshHandler();
      },[category])

 
  return tv.length > 0 ?(
    <div className=" w-screen ">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
        <i onClick={()=>{navigate(-1)}} className="ri-arrow-left-line hover:text-[#6556CD] mr-3"></i>
          Tv Shows<small className="ml-2 text-sm text-zinc-600">({category})</small></h1>

          <div className="flex items-center w-[80%] gap-2">
            <Topnav />
            <Dropdown title="Category" options={["on_the_air","popular","top_rated", "airing_today",]} func={(e)=> setcategory(e.target.value)} />

          </div>
      </div>
      <InfiniteScroll 
       dataLength={tv.length}
       next={GetTv}
       hasMore={hasMore}
       loader={<h1>Loading....</h1>}
       
      >
      <Cards data={tv} title="tv" />

      </InfiniteScroll>

    </div>
  ):<Loading />
};

export default Tvshows
