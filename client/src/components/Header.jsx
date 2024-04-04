import React, { useState } from 'react'
import imageLogo from "../assets/res/imageLogo.jpg"
import "./header.css"
import { Link, useNavigate } from 'react-router-dom'
import llogo from '../assets/res/log.png'

const Header = () => {
  const Navigate = useNavigate()
  const [searchContent, setSearchContent] = useState('')
  const handleSubmit= (e) =>{
        
        Navigate(`/books/${searchContent}`)

  }
  
  return (
    <div className='text-white  bg-[#CD9564] relative gap-5 pr flex w-full h-[10vh] bg- justify-between items-center' id='Navbar'>
       <div className='flex justify-around text-[rgb(10,32,8)] text-center items-center gap-5 content-center'>
       <Link to={'/'}><img src={llogo} className='h-[16vh]' alt="" /></Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/books"}>Books</Link>
       </div>
       <form onSubmit={handleSubmit}>
       <input type="text" autocomplete="off" name="text" value={searchContent} onChange={(e)=>setSearchContent(e.target.value)} className="input text-black" placeholder="Search by Author, Title ..."/>
       </form>
       <div className=' flex text-[rgb(10,32,8)] '>
  <Link to={"/login"}>Login</Link>
<div class="group input-box gap-5 relative w-[10vw] text-[rgb(10,32,8)]  flex justify-evenly pr-5 cursor-pointer">
  <Link>Sign Up</Link>
  <div className="hidden text-black absolute top-[100%] bg-[#CD9564] rounded  group-hover:flex flex-col gap-2 p-2">
            <Link to={"/signup"} className='hover:bg-[rgb(10,32,8)]  hover:text-white  rounded-lg px-1'>Reader</Link>
            <Link to={"/signup"} className='hover:bg-[rgb(10,32,8)] hover:text-white rounded-lg px-1'>Writer</Link>
            <div className=' border-b-[rgb(10,32,8)]'></div>
        </div>
       </div>
</div>




    </div>
  )
}

export default Header