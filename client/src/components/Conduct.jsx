import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const Conduct = () => {
  document.title= "Code of Conduct"
  return (
    <div className='flex font-medium text-lg leading-loose tracking-wide  py-5 flex-col px-[12.5%] bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
    <div className='flex pt-2  text-3xl align-middle justify-between text-center'>    
   <p className='w-full text-center mb-10'>Code of Conduct</p>
  </div>
        <div className='flex text-lg gap-5 justify-center  flex-col  mb-4 '>
            <p> <span className='font-bold'>1. Respect and Kindness:</span> Treat all members with respect, kindness, and empathy. Be considerate of others' opinions, backgrounds, and experiences.</p>
            <p> <span  className='font-bold'>2. Inclusive Environment:</span> Foster an inclusive environment where everyone feels welcome, regardless of race, ethnicity, gender, sexual orientation, religion, disability, or any other characteristic.</p>
            <p><span className='font-bold'>3. Civil Discourse:</span> Engage in constructive and civil discourse. Avoid personal attacks, harassment, discrimination, or any form of disrespectful behavior.</p>
            <p><span className='font-bold'>4. Safe Space: </span>Maintain a safe space for all members. Do not engage in or condone bullying, intimidation, threats, or violence.</p>
            <p> <span className='font-bold'>5. Privacy and Confidentiality:</span>Respect the privacy and confidentiality of others. Do not share personal information without consent, and refrain from discussing sensitive topics inappropriately.</p>
            <p><span className='font-bold'>6. Intellectual Property Rights:</span> Respect the intellectual property rights of others. Do not plagiarize, infringe on copyrights, or violate any other intellectual property laws.</p>
            <p><span className='font-bold'>7. Appropriate Content:</span> Ensure that all content shared within the community is appropriate and relevant. Avoid sharing offensive, explicit, or inappropriate material.</p>
            <p><span className='font-bold'>8. No Spam or Self-Promotion: </span>Refrain from spamming or excessively promoting personal content or products. Contribute to discussions genuinely and avoid overposting.</p>
            <p><span className='font-bold'>9.Compliance with Laws:</span> Adhere to all applicable laws, regulations, and terms of service. Report any illegal or inappropriate behavior to the community moderators or administrators.</p>
            <p><span className='font-bold'>10. Accountability and Responsibility: </span>Take responsibility for your actions and contributions to the community. Acknowledge mistakes, apologize when necessary, and learn from feedback.</p>
            <p><span className='font-bold'>11. Community Moderation:</span> Respect the decisions of community moderators and administrators. Follow their guidance and adhere to any specific rules or guidelines they enforce.</p>
            <p><span className='font-bold'>12. Reporting Concerns:</span> If you witness or experience behavior that violates this code of conduct, report it to the community moderators or administrators immediately.</p>
        </div>
        </div>

  )
}

export default Conduct