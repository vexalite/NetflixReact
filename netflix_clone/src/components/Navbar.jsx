import React from 'react'
import { useState} from "react"
import './netflix-logo-png-2562.png'

const Navbar = () => {
    const [menuState, setMenuState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "javascript:void(0)" },
      { title: "TV Shows", path: "javascript:void(0)" },
      { title: "Movies", path: "javascript:void(0)" },
      { title: "New & Popular", path: "javascript:void(0)" },
  ]

  return (
    <nav  className="z-[100] bg-gradient-to-t from-transparent via-gray-800 to-black">
    <div className="flex items-center space-around space-x-8 py-3 px-8">
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
        <div className="flex-1 flex items-center justify-between">
            <div className={` absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                    {
                        navigation.map((item, idx) => (
                            <li key={idx} className="text-white hover:text-red">
                                <a href={item.path}>
                                    {item.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                {/* <ProfileDropDown 
                    class="mt-5 pt-5 border-t lg:hidden"
                /> */}
            </div>
            <div className="z-[100] flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                <form className="flex items-center space-x-2 border rounded-md p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {/* <input
                        className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                        type="text"
                        placeholder="Search"
                    /> */}
                </form>
                {/* <ProfileDropDown 
                    class="hidden lg:block"
                /> */}
                {/* <button 
                    className="outline-none text-white block lg:hidden"
                    // onClick={() => setMenuState(!menuState)}
                >
                    {
                        menuState ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )
                    }
                </button> */}
            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar