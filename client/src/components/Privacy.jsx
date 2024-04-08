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
        <p className='w-[50%] justify-center text-2xl'>Privacy Policy </p>
        </div>
        </div>
        <div className='flex flex-col mx-10 gap-7 text-lg '>
            <div>
            <p className='pb-5 justify-center text-center text-xl'> <span className='text-pry '> WordSmitters</span> is committed to protecting the privacy of its users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website or services.</p>
            <p>1. Information We Collect</p>
            <p>Personal Information: When you register for an account or use our services, we may collect personal information such as your name, email address, username, password, and any other information you provide.</p>
            <p>Usage Information: We may collect information about how you interact with our website or services, such as your IP address, device information, browser type, pages visited, and the duration of your visit.</p>
            <p>Cookies: We may use cookies and similar tracking technologies to enhance your experience and collect additional information about your usage patterns.</p>
            </div>
            <div>
            <p>2. How We Use Your Information</p>
            <p>Provide Services: We use your personal information to provide and personalize our services, communicate with you, and process transactions.</p>
            <p>Improve Services: We analyze usage data to improve our website, services, and user experience.</p>
            <p>Marketing: With your consent, we may send you promotional emails about our services or other information we think you may find interesting.</p>
            <p>Legal Compliance: We may use your information to comply with legal obligations, enforce our policies, and protect our rights and interests.</p>
            </div>
            <div>
                <p>3. Information Sharing</p>
                <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website or providing services to you. We may also disclose your information in response to legal requests, enforce our policies, or protect our rights.</p>
            </div>
            <div>
                <p>4. Data Security</p>
                <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div>
                <p>5. Children's Privacy</p>
                <p>Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
            </div>
            <div>
                <p>6. Changes to This Privacy Policy</p>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            </div>
            <div>
                <p>7. Contact Us</p>
                <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at [<span className='text-pry '>WordSmitters</span>@gmail.com].</p>
            </div>
        </div>
    </div>
  )
}

export default Privacy