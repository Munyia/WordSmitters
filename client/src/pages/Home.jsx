import React from 'react'
import Header from '../components/Header'
import { bgimg } from '../assets'

const Home = () => {
  return (
    <div id='Home'>
       <Header/>
       <div className='h-[90vh] flex to-[rgb(59,87,59)] from-[rgb(10,32,8)] from-65% to-100% bg-gradient-to-r'>
        <div className=' w-3/5'>
        </div>
        <div className=' w-2/5'>
          {/* <img src={bgimg} className='w-full' alt="" /> */}
        </div>
       </div>
    </div>
  )
}

export default Home