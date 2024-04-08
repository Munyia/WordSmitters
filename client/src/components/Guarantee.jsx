import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const Guarantee = () => {
  return (
    <div className='flex font-medium text-lg leading-loose tracking-wide  p-5 flex-col px-15 bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
         <div className=' flex pt-2  text-3xl align-middle justify-between text-center '> 
        <div className='w-[20%] '>
        <Link to={'/'}><img src={llogo} className='h-[15vh]  ' alt="" /></Link>
        </div>
        <div className='w-[70%] '>
        <p className='w-[50%] justify-center'> Guarantee Page: <span className='text-pry '> WordSmitters</span></p>
        </div>
        </div>
        <div className='flex flex-col gap-5 text-lg  '>
            <p className='flex justify-center text-2xl'>Our Commitment to You</p>
            <p className='flex justify-center text-center text-2xl'>At <span className='text-pry '>  WordSmitters</span>, we are dedicated to providing you with unparalleled service and satisfaction. We stand behind the quality of our work and strive to exceed your expectations at every step of the process. Here's what you can expect when you choose <span className='text-pry '> WordSmitters</span>:</p>
            <p>Quality Assurance: We guarantee the highest standards of quality in every aspect of our service. From meticulously crafted content to seamless project management, we ensure excellence in every detail.</p>
            <p>Timely Delivery: Your deadlines are important to us. We are committed to delivering your projects on time, every time. With our efficient workflow and dedicated team, you can trust us to meet your deadlines without compromise.</p>
            <p>Client Satisfaction: Your satisfaction is our priority. We listen closely to your needs and preferences to tailor our services to your specific requirements. Our goal is to exceed your expectations and leave you fully satisfied with the results.</p>
            <p>Transparency and Communication: We believe in transparent communication every step of the way. You'll have direct access to our team, and we'll keep you informed of progress, milestones, and any developments related to your project.</p>
            <p>Revision Policy: Your feedback is invaluable to us. If you're not completely satisfied with the initial deliverables, we offer revisions to ensure that the final result meets your vision and expectations.</p>
            <p>Confidentiality: Your privacy and confidentiality are paramount. We treat your information with the utmost care and respect, ensuring that your projects remain confidential and secure throughout the process.</p>
            <p>Guaranteed Results: We are confident in the quality of our work and the expertise of our team. With <span className='text-pry '> WordSmitters</span>, you can trust that your projects will be handled with professionalism, creativity, and precision, resulting in exceptional outcomes every time.</p>
            <p>Your Satisfaction Is Our Guarantee</p>
            <p>At <span className='text-pry '> WordSmitters</span>s, we stand behind our work and are committed to your satisfaction. Choose us with confidence, knowing that you're partnering with a team dedicated to delivering excellence in every aspect of our service.</p> 

        </div>
    </div>
  )
}

export default Guarantee