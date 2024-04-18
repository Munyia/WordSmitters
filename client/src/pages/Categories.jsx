import React from 'react'
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
    <div className=' '>
      <div className='flex relative text-lg my-[3%] w-full justify-around  '>
        <div className='border-none w-[25%] rounded-3xl bg-white text-lg py-5 gap-3   shadow-black text-sec text-center shadow-2xl  flex flex-col '>
          <p className='underline text-2xl'>Fiction</p>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Romance</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Science Fiction</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Fantasy</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Teen & Young Adult</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Mystery, Thriller & Suspense</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Historical Fiction</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Literary Fiction</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Children Fiction</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Comics & Graphic (Manga)</Link>
            </div>
            <div className='border-none w-[25%] rounded-3xl text-lg py-5 gap-3  shadow-black text-sec  bg-white text-center shadow-2xl  flex flex-col '>
            <p className='underline text-2xl'>Literary Non-Fiction</p>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Biography</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Autobiography & Memory</Link>
            <Link className='underline mt-20 text-2xl hover:text-white hover:bg-sec block px-2 py-1'>AUDIOBOOK</Link>
        </div>
        <div className='border-none w-[25%] rounded-3xl text-lg py-5 gap-3 shadow-black bg-white text-sec text-se text-center shadow-2xl flex flex-col '>
            <p className='underline text-2xl'>Non-Fiction</p>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">History</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Philosophy</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Science</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Essay</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Self Help</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Cookbook</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Children Non-Fiction</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Travel Literature</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Journalism</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Religion & Spirituality</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Politics & social sciences</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Business & Economics</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Health & Wellness</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Craft & Hobbies</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Art & Photograph</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Technology & Computer</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Education</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Engineering</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">History</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Humour & Entertainment</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Law</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Academic Research</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Motivational Books</Link>
            <Link className="hover:text-white hover:bg-sec block px-2 py-1">Podcast</Link>
        </div>
    </div>
    </div>
  )
}

export default Categories