import React from 'react'
import imageLogo from "../assets/res/imageLogo.jpg"
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='  flex w-full h-[10vh]' id='Navbar'>
        <img src={imageLogo} alt="" />
        <div class="form-control">
  <input
    type="text"
    placeholder="Search by...."
    class="input input-alt"
  />
  <span className="input-border input-border-alt"></span>
</div>
<div class="group input-box cursor-pointer">
  <p>Sign Up</p>
  <div className="hidden group-hover:flex flex-col text-black gap-2 p-1">
            <Link to={''} className='hover:bg-slate-300 rounded-lg px-1'>Reader</Link>
            <Link to={''} className='hover:bg-slate-300 rounded-lg px-1'>Writer</Link>
            <Link to={''} className='hover:bg-slate-300 rounded-lg px-1'>Service provider</Link>
        </div>
</div>




    </div>
  )
}

export default Header