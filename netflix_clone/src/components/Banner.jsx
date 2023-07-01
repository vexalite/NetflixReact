import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from './Carousel';
import { FaInfoCircle, FaPlay} from 'react-icons/fa'
import Footer from '../LandingComponents/Footer';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'



const key = '731ae29297ab2bf2748d00850a3b087c';
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-IN&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-IN&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-IN&page=1`,
};


const Banner = () => {

    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)];

    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(()=>{
      axios.get(requests.requestPopular)
      .then((response)=>{
        setMovies(response.data.results)
      })
    },[])
  console.log(movie);
  
  const handleClick = (movie) =>{
    if (trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.name)
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
    <div className='w-full h-full text-white text-left'>
      <div className='-mt-[5%]  w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-[950px] object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[40%]  p-4 md:p-8'>
          <h1 className='text-4xl md:text-4xl font-bold'>{movie?.title}</h1><br/>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p><br/>
          <p className='w-full md:max-w-[70%] lg:max-w-[40%] text-gray-200'>
            {/* {truncateString(movie?.overview, 150)} */}
            {movie?.overview}
          </p>
          <div className='my-4'>
            <button className='border rounded text-center inline-flex gap-1 bg-gray-300 text-black  py-2 px-5'>
              <FaPlay size={30} />Play
            </button>
            <button className=' rounded text-center inline-flex gap-1 text-white bg-gray-800 py-2 px-5 ml-4'>
             <FaInfoCircle size={30} /> More Info
            </button>
          </div>
            <br/>     <br/>     <br/>     <br/>     <br/> <br/> <br/>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
          <Carousel rowId='1' title = 'Popular' fetchURL={requests.requestPopular}/>
          <Carousel rowId='2' title = 'Upcoming' fetchURL={requests.requestUpcoming} />
          <Carousel rowId='3' title = 'Top Rated' fetchURL={requests.requestTopRated} />
        <Carousel rowId='4' title = 'Trending' fetchURL={requests.requestTrending} />
        <Carousel rowId='5' title = 'Horror' fetchURL={requests.requestHorror} />
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Banner