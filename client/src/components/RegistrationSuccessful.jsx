import React from 'react'
import { Link } from 'react-router-dom'

const RegistrationSuccesful = () => {
  return (
    <div>
        <div className="flex w-screen absolute top-0 flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <div className="bg-sec shadow-md justify-center text-center rounded px-8 pt-6 pb-8 mb-4">
                    <div className="text-center mb-4">
                        <h1 className="text-2xl font-bold text-white">
                            Registration Successful!
                        </h1>
                    </div>
                    <div className="text-center mb-5">
                        <p className="text-white text-sm">
                            Your account has been successfully created.
                        </p>
                    </div>
                    <Link to={'/login'} className='bg-pry text-sec text-center justify-center rounded p-2'>Go to Login</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationSuccesful