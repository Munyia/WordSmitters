import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom' 

const Privacy = () => {
  return (
    <div  className='flex font-medium text-lg leading-loose tracking-wide  p-5 flex-col px-15 bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
        <div className=' flex pt-2  text-3xl align-middle justify-between text-center '> 
        <div className='w-[20%] '>
        <Link to={'/'}><img src={llogo} className='h-[15vh]  ' alt="" /></Link>
        </div>
        <div className='w-[70%] '>
        <p className='w-[50%] justify-center'> Guarantee Page: <span className='text-pry '> WordSmitters</span></p>
        </div>
        </div>
        <h1>Privacy Policy</h1>
        <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in Our Terms and Conditions, which is accessible at BookSmitters unless otherwise defined in this Privacy Policy.
        </p>
        <h2>Information Collection And Use</h2>
        <h3>Types of Information Collected</h3>
    </div>
  )
}

export default Privacy