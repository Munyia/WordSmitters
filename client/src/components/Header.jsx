import React from 'react'
import imageLogo from "../assets/res/imageLogo.jpg"
import "./header.css"
import { Link } from 'react-router-dom'
import log from '../assets/res/log.png'

const Header = () => {
  return (
    <div className='text-white relative gap-5 pr flex w-full h-[10vh] bg-[rgb(198,82,0)] justify-between items-center' id='Navbar'>
       <div className='flex justify-around text-center items-center gap-5 content-center'>
        <img src={log} className='h-[8vh]' alt="" />
          <Link>About</Link>
       </div>
       <div>
       <input type="text" autocomplete="off" name="text" class="input" placeholder="Search by Author, Title ..."/>
       </div>
       <div className=' flex'>
  <Link>Login</Link>
<div class="group input-box gap-5 relative w-[10vw] flex justify-evenly pr-5 cursor-pointer">
  <Link>Sign Up</Link>
  <div className="hidden text-white absolute top-[100%] bg-[#1c6355] rounded  group-hover:flex flex-col gap-2 p-2">
            <Link to={''} className='hover:bg-slate-300 rounded-lg px-1'>Reader</Link>
            <Link to={''} className='hover:bg-slate-300 rounded-lg px-1'>Writer</Link>
        </div>
       </div>
</div>




    </div>
  )
}

export default Header