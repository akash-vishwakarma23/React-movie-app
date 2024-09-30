import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav"
import Dropdown from "../templates/Dropdown"
import Axios from "../utils/Axios";
import Cards from "../templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';


const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  document.title = "SCSDB | Popular " + category.toLocaleUpperCase();


  const GetPopular = async () => {
    try {
        const { data } = await Axios.get(`${category}/popular?page=${page}`);
        // settrending(data.results);

        if (data.results.length > 0) {
        setpage(page + 1);
        setpopular((prevState) => [...prevState, ...data.results]);
        }
        else{
          sethasMore(false);
        }
        

    } catch (error) {
        console.log("Error: ", error);
    }
  };

  const refreshHandler =  () => {
    if(popular.length === 0) {
      GetPopular();
    }
    else{
      setpage(1);
      setpopular([]);
      GetPopular()
    }
  }

    
    
    useEffect(()=>{
      refreshHandler();
    },[category])


    return popular.length > 0 ?(
        <div className=" w-screen ">
          <div className="px-[3%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400">
            <i onClick={()=>{navigate(-1)}} className="ri-arrow-left-line hover:text-[#6556CD] mr-3"></i>
              Popular</h1>
    
              <div className="flex items-center w-[80%] gap-2">
                <Topnav />
                <Dropdown title="Category" options={["tv","movie"]} func={(e)=> setcategory(e.target.value)} />
    
              </div>
          </div>
          <InfiniteScroll 
           dataLength={popular.length}
           next={GetPopular}
           hasMore={hasMore}
           loader={<h1>Loading....</h1>}
           
          >
          <Cards data={popular} title={category} />
    
          </InfiniteScroll>
    
        </div>
      ):<Loading />
    };

export default Popular
