import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Hero from './Hero';
import Faq from './Faq';
    

const Landing = () => {
  const notify = () => toast("Wow so easy!");
  toast.success("Successfully uploaded");
  return (
    <div onClick={notify}>
        {/* <button className='text-white text-3xl' onClick={GoHome}>Home</button> */}
        {/* <NavBar /> */}
        <Hero />
        <div onLoad={notify} className='w-full h-2 bg-gray-800 -mt-[5%]
        ' />
        <Faq/>
        <br/><br/>
        <div className='w-full h-2 bg-gray-800 
        ' />
        <Footer/>
    </div>
  )
}

export default Landing