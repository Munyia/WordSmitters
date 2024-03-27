import React from 'react'
import Header from '../components/Header'
import { bg0, bgimg } from '../assets'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='Home'>
       <Header/>
       <div className='h-[90vh] flex'>
        <div className=' w-3/5 p-20 flex flex-col gap-6'>
          <h1 className=' font-extrabold text-[#CD9564] text-[3rem]'>Welcome to WordSmithers</h1>
          <p className='text-[#939393] justify-center content-center place-content-center tracking-wide leading-relaxed font-playfair'>"Hello and welcome to WordSmithers, where the magic of Nigerian literature comes to life! 📚 Whether you're a passionate reader eager to explore the rich tapestry of Nigerian stories or a talented writer looking to share your own narrative, you've found the perfect place to connect, inspire, and celebrate the beauty of our diverse literary landscape. Get ready to embark on an enchanting journey filled with captivating tales, insightful reflections, and boundless creativity. We're thrilled to have you join our vibrant community of wordsmiths. Let's unlock the power of storytelling together and weave new chapters into the fabric of our shared Nigerian experience. Welcome aboard!"</p>
          <div className='flex justify-around text-white'>
            <Link className='bg-[rgb(10,32,8)] py-2 px-6 rounded-md'>Reader</Link>
            <Link className='bg-[rgb(10,32,8)] py-2 px-6 rounded-md'>Writer</Link>
          </div>
        </div>
        <div className=' w-2/5'>
          <img src={bg0} className='w-full' alt="" />
        </div>
       </div>
    </div>
  )
}

export default Home