import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav"
import Dropdown from "../templates/Dropdown"
import Axios from "../utils/Axios";
import Cards from "../templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "SCSDB | people " + category.toLocaleUpperCase();
  
  
    const GetPerson = async () => {
      try {
          const { data } = await Axios.get(`/person/${category}?page=${page}`);
          // settrending(data.results);
  
          if (data.results.length > 0) {
          setpage(page + 1);
          setperson((prevState) => [...prevState, ...data.results]);
          }
          else{
            sethasMore(false);
          }
          
  
      } catch (error) {
          console.log("Error: ", error);
      }
    };
  
    const refreshHandler =  () => {
      if(person.length === 0) {
        GetPerson();
      }
      else{
        setpage(1);
        setperson([]);
        GetPerson()
      }
    }
  
      useEffect(()=>{
        refreshHandler();
      },[category])

  return person.length > 0 ?(
    <div className=" w-screen ">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
        <i onClick={()=>{navigate(-1)}} className="ri-arrow-left-line hover:text-[#6556CD] mr-3"></i>
          People<small className="ml-2 text-sm text-zinc-600">({category})</small></h1>

          <div className="flex items-center w-[80%] gap-2">
            <Topnav />

          </div>
      </div>
      <InfiniteScroll 
       dataLength={person.length}
       next={GetPerson}
       hasMore={hasMore}
       loader={<h1>Loading....</h1>}
       
      >
      <Cards data={person} title="person" />

      </InfiniteScroll>

    </div>
  ):<Loading />
};

export default People
