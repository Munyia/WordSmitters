import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const Conduct = () => {
  return (
    <div className='flex font-medium text-lg leading-loose tracking-wide  p-5 flex-col px-15 bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
        <div className=' flex pt-2  text-3xl align-middle justify-between text-center '> 
        <div className='w-[20%] '>
        <Link to={'/'}><img src={llogo} className='h-[15vh]  ' alt="" /></Link>
        </div>
        <div className='w-[70%] '>
        <p className='w-[50%] justify-center'> Code of Conduct</p>
        </div>
        </div>
    </div>
  )
}

export default Conduct