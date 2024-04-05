import React from 'react'

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
        <div>
            <p>Respectful Communication: Treat others with kindness, respect, and empathy. Avoid offensive language, personal attacks, and discriminatory remarks. Foster a positive and inclusive atmosphere where everyone feels valued and heard.</p>
            <p>Constructive Feedback: Provide feedback in a constructive and helpful manner. Focus on the content and ideas rather than attacking the person. Offer suggestions for improvement and encourage open dialogue.</p>
        </div>
    </div>
  )
}

export default Community