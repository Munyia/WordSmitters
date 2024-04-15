import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='text-lg flex my-[3%] w-full justify-around '>
        <div className='border-none w-[40%]  text-center shadow-2xl  flex flex-col '>
            <Link>Romance</Link>
            <Link>Science Fiction</Link>
            <Link>Fantasy</Link>
            <Link>Teen & Young Adult</Link>
            <Link>Mystery, Thriller & Suspense</Link>
            <Link>Historical Fiction</Link>
            <Link>Literary Fiction</Link>
            <Link>Children Fiction</Link>
            <Link>Comics & Graphic (Manga)</Link>
            <Link className=' underline mt-20'>Literary Non-Fiction</Link>
            <Link>Biography</Link>
            <Link>Autobiography & Memory</Link>
        </div>
        <div className='border-none w-[40%] text-center shadow-2xl flex flex-col '>
            <Link>Non-Fiction</Link>
            <Link>History</Link>
            <Link>Philosophy</Link>
            <Link>Science</Link>
            <Link>Essay</Link>
            <Link>Self Help</Link>
            <Link>Cookbook</Link>
            <Link>Children Non-Fiction</Link>
            <Link>Travel Literature</Link>
            <Link>Journalism</Link>
            <Link>Religion & Spirituality</Link>
            <Link>Politics & social sciences</Link>
            <Link>Business & Economics</Link>
            <Link>Health & Wellness</Link>
            <Link>Craft & Hobbies</Link>
            <Link>Art & Photograph</Link>
            <Link>Technology & Computer</Link>
            <Link>Education</Link>
            <Link>Engineering</Link>
            <Link>History</Link>
            <Link>Humour & Entertainment</Link>
            <Link>Law</Link>
            <Link>Academic Research</Link>
            <Link className='underline mt-20'>AUDIOBOOK</Link>
            <Link>Podcast</Link>
            <Link>Motivational Books</Link>
        </div>
    </div>
  )
}

export default Categories