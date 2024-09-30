import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data , title}) => {
  return(
    <div className=' flex justify-center flex-wrap gap-20 w-full bg-[#1F1E24]'>
     {data.map((c, i) => (
        <Link to={`/${data.media_type || title}/details/${c.id}`} className='relative w-[25vh]' key={i}>
          <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} alt="" />
          
          <h1 className='text-xl text-zinc-400 mt-3 font-semibold'>
            {c.name || c.title || c.original_name || c.original_title}

          </h1>
          {c.vote_average && <div className='absolute right-[-10%] top-[55%] text-lg bg-yellow-600 w-[6vh] h-[6vh] rounded-full flex justify-center items-center'>{(c.vote_average * 10).toFixed()}<sup>%</sup>
          </div>} 
          

        </Link>
     ))}
    </div>
  )
}

export default Cards
