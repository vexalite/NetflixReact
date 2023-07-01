import React from 'react'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {

    const navigate = useNavigate();
  
    const GoHome = () => {
      navigate('/home');
    }

  return (
    
        <nav  className="z-[100] bg-gradient-to-b from-black to-transparent">
    <div className="flex items-center space-between
     space-x-8 py-3 px-8">
        <div onClick={GoHome} className="z-[100] flex-none lg:flex-initial ">
            <a href="javascript:void(0)">
                <img
                    src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
                    width={120} 
                    height={50}
                    alt="Float UI logo"
                />
            </a>
        </div>
        <div className='flex-1 flex items-center justify-between'>
       {/* <button className='border bg-red-600 z-[100] text-white font-bold border-red-600 rounded p-2'>Signup</button> */}
        </div>
    </div>
</nav>
    
  )
}

export default NavBar