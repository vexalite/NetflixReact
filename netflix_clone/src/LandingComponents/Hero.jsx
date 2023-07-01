import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Hero = () => {
  const navigate = useNavigate();
  
    const GoHome = () => {
      navigate('/home');
    }

  return (
   <div className='mb-[10%]'>
    <NavBar />
    <div className='h-[680px]  -mt-[4%]'>
        <img className='w-full
         h-[680px] brightness-20' src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/f7eb3bc2-2867-4c7e-94f8-e62ec11175cd/IN-en-20230626-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    </div>
    <div className='text-white -mt-[20%]'>
    <h1 className='text-5xl text-white font-bold'>Unlimited movies, TV<br/> shows and more</h1><br/>
    <h5 className='text-3xl text-white '>Watch anywhere. Cancel anytime.</h5><br/>
    <h5 className='text-2xl text-white'>Ready to watch? Enter your email to create or restart your membership.</h5>
    <input className='p-4 w-80 text-white roounded bg-slate-600' value="Email Address" type="text" /><button onClick={GoHome} className='font-bold text-xl border rounded p-4 bg-red-800 text-white inline-flex'>Get Started</button>
    </div>
   {/* <div className='border w-full h-2 bg-red-600'></div> */}
   </div>
    
  )
}

export default Hero