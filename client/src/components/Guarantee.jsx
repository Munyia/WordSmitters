import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const Guarantee = () => {
  document.title= "Guarantee Page"
  return (
    <div className='flex font-medium text-lg leading-loose tracking-wide  py-5 flex-col px-[12.5%] bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
         <div className='flex pt-2  text-3xl align-middle justify-between text-center'>    
        <p className='w-full text-center mb-10'> Guarantee Page: <span className='text-pry '> WordSmitters</span></p>
       </div>
       
        <div className='flex flex-col gap-5 rounded-3xl px-5 py-5 bg-white/30 backdrop-blur-lg text-black border border-transparent shadow-xl text-lg   '>
            <p className='flex justify-center text-lg '>Our Commitment to You</p>
            <p className='flex justify-center text-center text-lg '> At <span className='text-pry ml-1 '>  WordSmitters</span>, we are dedicated to providing you with unparalleled service and satisfaction. We stand behind the quality of our work and strive to exceed your expectations at every step of the process. Here's what you can expect when you choose <span className='text-pry '> WordSmitters</span>:</p>
            <p> <span className='font-bold'>1. Quality Assurance: </span>We guarantee the highest standards of quality in every aspect of our service. From meticulously crafted content to seamless project management, we ensure excellence in every detail.</p>
            <p><span className='font-bold'>2. Timely Delivery:</span> Your deadlines are important to us. We are committed to delivering your projects on time, every time. With our efficient workflow and dedicated team, you can trust us to meet your deadlines without compromise.</p>
            <p><span className='font-bold'>3. Client Satisfaction:</span> Your satisfaction is our priority. We listen closely to your needs and preferences to tailor our services to your specific requirements. Our goal is to exceed your expectations and leave you fully satisfied with the results.</p>
            <p><span className='font-bold'>4. Transparency and Communication:</span> We believe in transparent communication every step of the way. You'll have direct access to our team, and we'll keep you informed of progress, milestones, and any developments related to your project.</p>
            <p><span className='font-bold'>5. Revision Policy: </span>Your feedback is invaluable to us. If you're not completely satisfied with the initial deliverables, we offer revisions to ensure that the final result meets your vision and expectations.</p>
            <p><span className='font-bold'>6. Confidentiality: </span>Your privacy and confidentiality are paramount. We treat your information with the utmost care and respect, ensuring that your projects remain confidential and secure throughout the process.</p>
            <p><span className='font-bold'>7. Guaranteed Results: </span>We are confident in the quality of our work and the expertise of our team. With <span className='text-pry '> WordSmitters</span>, you can trust that your projects will be handled with professionalism, creativity, and precision, resulting in exceptional outcomes every time.</p>
            <p>8. Your Satisfaction Is Our Guarantee</p>
            <p>9. At <span className='text-pry '> WordSmitters</span>s, we stand behind our work and are committed to your satisfaction. Choose us with confidence, knowing that you're partnering with a team dedicated to delivering excellence in every aspect of our service.</p> 

        </div>
    </div>
  )
}

export default Guarantee