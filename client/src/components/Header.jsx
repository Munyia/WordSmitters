import React from 'react'
import imageLogo from "../assets/res/imageLogo.jpg"
import "./header.css"
import { Link } from 'react-router-dom'
import llogo from '../assets/res/log.png'
import SignIn from '../pages/SignUp'

const Header = () => {
  return (
    <div className='text-white  bg-[#CD9564] relative gap-5 pr flex w-full h-[10vh] bg- justify-between items-center' id='Navbar'>
       <div className='flex justify-around text-[#3BE692] text-center items-center gap-5 content-center'>
       <Link to={'/'}><img src={llogo} className='h-[16vh]' alt="" /></Link>
          <Link>About</Link>
          <Link>Books</Link>
       </div>
       <div>
       <input type="text" autocomplete="off" name="text" class="input" placeholder="Search by Author, Title ..."/>
       </div>
       <div className=' flex text-[#3BE692] '>
  <Link to={"/login"}>Login</Link>
<div class="group input-box gap-5 relative w-[10vw] text-[#3BE692]  flex justify-evenly pr-5 cursor-pointer">
  <Link to={"/SignUp"}>Sign Up</Link>
  <div className="hidden text-black absolute top-[100%] bg-[#CD9564] rounded  group-hover:flex flex-col gap-2 p-2">
            <Link to={''} className='hover:bg-[#3BE692)]  hover:text-white  rounded-lg px-1'>Reader</Link>
            <Link to={''} className='hover:bg-[#3BE692)] hover:text-white rounded-lg px-1'>Writer</Link>
            <div className=' border-b-[#3BE692]'></div>
        </div>
       </div>
</div>




    </div>
  )
}

export default Header