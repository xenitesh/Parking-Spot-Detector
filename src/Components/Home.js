import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="md:w-[50%] w-[90%] flex flex-col items-center justify-center bg-[#b5dfff] h-full md:m-5 rounded-3xl border-black border-[5px]">
      <Navbar/>
      <div className='flex flex-col gap-20 m-4 p-4 mt-16 items-center w-full'>
        <NavLink to="/video1">
            <button className="custom-btn btn-3 rounded-md"><span>Video1</span></button>
        </NavLink>
        <NavLink to="/video2">
           <button className="custom-btn btn-3 rounded-md"><span>Video2</span></button>
        </NavLink>
        <NavLink to="/video3">
           <button className="custom-btn btn-3 rounded-md"><span>Video3</span></button>
        </NavLink>
        <NavLink to="/video4">
            <button className="custom-btn btn-3 rounded-md"><span>Video4</span></button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home