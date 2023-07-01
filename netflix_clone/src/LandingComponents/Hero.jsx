import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
   <div>
    <div className='h-[800px]'>
        <img className='w-full ' src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/f7eb3bc2-2867-4c7e-94f8-e62ec11175cd/IN-en-20230626-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    </div>
    <div className='text-white -mt-[10%]'>
    <h1>Unlimited movies, TV shows and more</h1>
    <h5>Watch anywhere. Cancel anytime.</h5>
    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
    <input type="text" /><button>Get Started <FaArrowRight/></button>
    </div>
   </div>
    
  )
}

export default Hero