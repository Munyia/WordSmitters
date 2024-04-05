import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const Community = () => {
  return (
    <div  className='flex font-medium text-lg leading-loose tracking-wide  p-5 flex-col px-15 bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
      <div className=' flex pt-2  text-3xl align-middle justify-between text-center '> 
        <div className='w-[20%] '>
        <Link to={'/'}><img src={llogo} className='h-[15vh]  ' alt="" /></Link>
        </div>
        <div className='w-[70%] '>
        <p className='w-[50%] justify-center'> Community Guidelines</p>
        </div>
        </div>
        <div className='flex text-lg gap-5 justify-center  flex-col  mb-4 pl-20 pr-20'>
            <p>Respectful Communication: Treat others with kindness, respect, and empathy. Avoid offensive language, personal attacks, and discriminatory remarks. Foster a positive and inclusive atmosphere where everyone feels valued and heard.</p>
            <p>Constructive Feedback: Provide feedback in a constructive and helpful manner. Focus on the content and ideas rather than attacking the person. Offer suggestions for improvement and encourage open dialogue.</p>
            <p>Intellectual Property Rights: Respect the intellectual property rights of others. Do not plagiarize or infringe on copyrights. If sharing content created by others, give proper credit and obtain necessary permissions.</p>
            <p>Appropriate Content: Ensure that all content shared on Wordsmitters is appropriate for a diverse audience. Avoid posting explicit or offensive material, including nudity, violence, hate speech, or illegal content.</p>
            <p>Privacy and Confidentiality: Respect the privacy and confidentiality of others. Do not share personal or sensitive information without permission. Protect your own privacy by being cautious about the information you share online.</p>
            <p>No Spam or Self-Promotion: Refrain from spamming or excessively promoting your own content or products. Participate in discussions genuinely and avoid overposting or overposting irrelevant content.</p>
            <p>Helpful and Supportive Community: Be proactive in helping and supporting other members of the community. Offer assistance, share resources, and collaborate with others to foster a supportive environment for learning and growth.</p>
            <p>Compliance with Laws and Regulations: Adhere to all applicable laws, regulations, and terms of service while using Wordsmitters. Report any illegal or inappropriate behavior to the appropriate authorities or platform administrators.</p>
            <p>Accountability and Responsibility: Take responsibility for your actions and contributions to the community. Acknowledge mistakes, apologize when necessary, and learn from feedback to continuously improve your conduct.</p>
            <p>Community Moderation: Respect the decisions of community moderators and administrators. Follow their guidance and adhere to any specific rules or guidelines they enforce to maintain a positive and healthy community environment.</p>
        </div>
    </div>
  )
}

export default Community