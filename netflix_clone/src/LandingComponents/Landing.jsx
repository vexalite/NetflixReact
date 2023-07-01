import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer';
import Hero from './Hero';
    

const Landing = () => {
    const navigate = useNavigate();
  
    const GoHome = () => {
      navigate('/home');
    }
  return (
    <div>
        <button className='text-white text-3xl' onClick={GoHome}>Home</button>
        <NavBar />
        <Hero />
        <Footer/>
    </div>
  )
}

export default Landing