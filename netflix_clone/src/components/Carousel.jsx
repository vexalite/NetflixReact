import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Carousel = ({title, fetchURL, rowId}) => {

  const [movies, setMovie] = useState([])

  useEffect(()=>{
    axios.get(fetchURL)
    .then((response) =>{
      setMovie(response.data.results)
    })
  },[fetchURL])
console.log(movies)

const slideLeft = (rowId) => {
  var slider = document.getElementById('slider' + rowId);
  slider.scrollLeft -= 500;
};

const slideRight = () => {
  var slider = document.getElementById('slider' + rowId);
  slider.scrollLeft += 500;
};
const [trailerUrl, setTrailerUrl] = useState("")


const handleClick = (movie) =>{
  if (trailerUrl){
    setTrailerUrl("")
  }else{
    movieTrailer(movies?.name)
    .then((url) => {
      const urlParams = new  URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get("v"))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}


const opts ={
  height:"390",
  width: "100%",
  playerVars:{
    autolay:1,
  }
}


  return (
    <div className='z-[100] '>
      
      <h2 className='text-white font-bold md:text-l p-2 -mb-5 text-left'>{title}</h2>
      <div className="relative flex items-center group">
        <FaAngleLeft onClick={slideLeft} className='  z-[100] left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' size ={40}/>
        <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, id) =>(
            <div className='w-[160px] sm:w-[240px] md:w-[250px] lg:w-[280px] inline-block cursor-pointer relative m-3'>
              <img onClick={()=> handleClick(item)} className='w-full h-auto block rounded' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
              <div className ='absolute top-0 left-0 w-full h-full hover:bg-black/50 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                {/* <p>{like ? <FaHeart /> : <FaRegHeart />}</p> */}

              </div>
            </div>
          ))}
        </div>
        <FaAngleRight onClick={slideRight} className=' right-0 z-[100] rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' size ={40}/>
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Carousel