import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import llogo from '../assets/res/log.png'
import { Fade as Hamburger } from 'hamburger-react'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  function isLoggedIn() {
    return !!localStorage.getItem('token')
  }
  const Navigate = useNavigate()
  const [searchContent, setSearchContent] = useState('')
  const handleSubmit= (e) =>{
        
        Navigate(`/books/${searchContent}`)

  }
  function logout() {
    localStorage.removeItem('token')
    Navigate('/login')
  }
  
  return (
    <div className='text-white  bg-[#CD9564] relative gap-5 pr flex w-full h-[13vh] bg- justify-between items-center' id='Navbar'>
       <div className='flex justify-around text-[rgb(10,32,8)] text-center items-center gap-5 content-center h-full overflow-hidden w-[35%]'>
       <Link to={'/'}><img src={llogo} className='h-[16vh]' alt="" /></Link>
          <Link to={"/about"} className='flex hover:underline text-lg hover:text-xl w-20'>About</Link>
          <Link to={"/books"}  className='flex hover:underline text-lg hover:text-xl w-20'>Books</Link>
          <div className="group  gap-5  w-[10vw] text-[rgb(10,32,8)]  flex justify-evenly pr-5 cursor-pointer">
          <Link  className='flex hover:underline text-lg hover:text-xl w-20'>Categories</Link>
 
        </div>
       </div>
       <form onSubmit={handleSubmit}>
       <input type="text" autocomplete="off" name="text" value={searchContent} onChange={(e)=>setSearchContent(e.target.value)} className="border-none outline-none rounded-2xl p-4 bg-white transition duration-300 ease-in-out h-[8vh] shadow-[inset_2px_5px_10px_grey] focus:shadow-[inset_1px_1px_10px_grey] focus:scale-[1.05] text-black" placeholder="Search by Author, Title ..."/>
       </form>
       <div className='w-[35%] flex justify-end'>

        {  isLoggedIn()? <div className='relative'>
          <Hamburger toggled={isOpen} toggle={setOpen}/>
          {

          isOpen &&
          <div className="absolute top-full right-0 flex flex-col w-[300%] bg-pry px-1 gap-4 pb-2">
            <div className='flex items-center pl-2 gap-2'>
            <span className=' bg-gray-300 rounded-full aspect-square w-[30%] flex items-center justify-center'>MN</span>
            <span to={"/login"} className="button3 ">Munyia</span>
            </div>
            <p className="hover:bg-sec bg-opacity-0 cursor-not-allowed rounded p-1 text-center">Profile</p>
            <p onClick={logout} className="hover:bg-sec rounded p-1 cursor-pointer text-center">Logout</p>
          </div>
          }
          </div>:
       <div className=' flex text-[rgb(10,32,8)]'>

          <Link to={"/login"}  className='flex hover:underline text-lg hover:text-xl w-20'>Login</Link>
        <div className="group  gap-5 relative w-[10vw] text-[rgb(10,32,8)]  flex justify-evenly pr-5 cursor-pointer">
        <Link  className='flex hover:underline text-lg hover:text-xl '>Sign Up</Link>
  <div className="hidden text-black absolute top-[100%] bg-[#CD9564] rounded  group-hover:flex w-full flex-col gap-2 p-2 text-center">
            <Link to={"/signup"} className='hover:bg-[rgb(10,32,8)]  hover:text-white  rounded-lg px-1 py-1'>Reader</Link>
            <Link to={"/signup"} className='hover:bg-[rgb(10,32,8)] hover:text-white rounded-lg px-1 py-1'>Writer</Link>
            <div className=' border-b-[rgb(10,32,8)]'></div>
        </div>
       </div>
</div>
}
</div>





    </div>
  )
}

export default Header