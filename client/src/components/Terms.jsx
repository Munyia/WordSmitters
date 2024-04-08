import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div className='flex font-medium text-lg leading-loose tracking-wide  p-5 flex-col px-15 bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
    <div className=' flex pt-2  text-3xl align-middle justify-between text-center '> 
        <div className='w-[20%] '>
        <Link to={'/'}><img src={llogo} className='h-[15vh]  ' alt="" /></Link>
        </div>
        <div className='w-[70%] '>
        <p className='w-[50%] justify-center'> Terms and Condition</p>
        </div>
        </div>
        <div className=' flex relative  flex-col'>
            <div className='flex text-2xl justify-center  text-center  mb-4 pl-10 pr-10 '> Welcome to <span className='text-pry '> WordSmitters</span> </div>
            <p className=' text-xl justify-center  align-middle text-center  mb-4 pl-10 pr-10  '>These terms and conditions outline the rules and regulations for the use of our book web app. 
By accessing this web app, we assume you accept these terms and conditions. Do not continue to use <span className='text-pry '> WordSmitters</span> if you do not agree to all of the terms and conditions stated on this page.
</p>

<div className='flex flex-col gap-5 text-lg justify-items-start pl-20 pr-20  '>
  <div>
  <p>1. License to Use</p>
  <p>1.1.<span className='text-pry '> WordSmitters</span>grants you a limited license to access and use this web app for personal use only.</p>
  <p> 1.2. This license does not permit you to:</p>
  <p>* Modify or copy the materials from <span className='text-pry '> WordSmitters</span>. </p>
  <p>* Use the materials for any commercial purpose or for any public display (commercial or non-commercial).</p>
  <p>* Remove any copyright or other proprietary notations from the materials. </p>
  </div>
  <div>
    <p>2. Nigerian Books Only</p>
    <p>2.1. <span className='text-pry '> WordSmitters</span> is dedicated to promoting Nigerian literature. We exclusively feature books authored by Nigerian writers or books related to Nigerian culture, heritage, or history. </p>
    <p>2.2. Users are prohibited from uploading or promoting books that do not align with the focus on Nigerian literature.</p>
  </div>
  <div>
    <p>3. User Conduct</p>
    <p>3.1. Users are solely responsible for the content they upload, share, or distribute on <span className='text-pry '> WordSmitters</span>.</p>
    <p>3.2. Users agree not to: </p>
    <p>* Violate any laws, regulations, or third-party rights.</p>
    <p>* Upload or share content that is defamatory, offensive, or infringes upon intellectual property rights.</p>
    <p>* Engage in any activity that disrupts or interferes with the functioning of <span className='text-pry '> WordSmitters</span> or its services.</p>
  </div>
  <div>
    <p>4. Privacy Policy</p>
    <p>4.1. <span className='text-pry '> WordSmitters</span>respects the privacy of its users. Our Privacy Policy outlines how we collect, use, and disclose personal information. By using <span className='text-pry '> WordSmitters</span>, you agree to the terms of our Privacy Policy.</p>
  </div>
  <div>
    <p>5. Termination</p>
    <p>5.1.<span className='text-pry '> WordSmitters</span> reserves the right to terminate or suspend access to the web app without prior notice if users violate these terms and conditions or engage in activities detrimental to the app's integrity or reputation.</p>
  </div>
  <div>
    <p>6. Changes to Terms</p>
    <p>6.1.<span className='text-pry '> WordSmitters</span> may revise these terms and conditions at any time without notice. By continuing to use the web app after such revisions, you agree to be bound by the updated terms and conditions.</p>
  </div>
  <div>
    <p>7. Governing Law</p>
    <p>7.1. These terms and conditions are governed by and construed in accordance with the laws of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Nigeria.</p>
  </div>
  <p>By using <span className='text-pry '> WordSmitters</span>, you signify your acceptance of these terms and conditions. If you have any questions or concerns about these terms, please contact us at <span> contact@<span className='text-pry '> WordSmitters</span>.com.</span></p>
</div>

        </div>
    </div>
  )
}

export default Terms