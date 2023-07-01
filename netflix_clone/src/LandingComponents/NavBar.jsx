import React from 'react'

const NavBar = () => {
  return (
    
        <nav  className="z-[100] bg-white">
    <div className="flex items-center space-between
     space-x-8 py-3 px-8">
        <div className="z-[100] flex-none lg:flex-initial">
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
       <button className='border bg-red-600 text-white font-bold border-red-600 rounded p-2'>Signup</button>
        </div>
    </div>
</nav>
    
  )
}

export default NavBar