import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'



const key = '731ae29297ab2bf2748d00850a3b087c';
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-IN&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-IN&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-IN&page=1`,
};

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    {/* <Carousel title = 'Upcoming' fetchURL={requests.requestUpcoming} />

    <Carousel title = 'Popular' fetchURL={requests.requestPopular} />
    <Carousel title = 'Top Rated' fetchURL={requests.requestTopRated} />
    <Carousel title = 'Trending' fetchURL={requests.requestTrending} />
    <Carousel title = 'Horror' fetchURL={requests.requestHorror} /> */}
    </>
  )
}

export default Home