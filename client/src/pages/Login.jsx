import React from 'react'
import "./login.css"
import { tb, llogo, lock, eye } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import Loader from '../components/Loader'
import api from '../utils/api'


const Login = () => {
  document.title= "Login"
  const [password, setPassword] = useState("") 
  const [credentials, setCredentials] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false); 
  const Navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };
  
  const handleSubmit =  async (e) => {
    e.preventDefault()  
    setLoading(true)
try{
  const response = await api.post("users/login", {
    credentials: credentials,
    password: password
  })
  console.log(response);
  setLoading(false);
  localStorage.setItem('token', response.data.token)
  Navigate('/')

}catch(error){
  console.log(error)
  setLoading(false); // Toggle loading state off after request error
  setErrors(error.response.data);
}

}

  return (
    <div className=' w-full placeholder:text-[#CD9564] bg-[rgba(10,32,8,0.9)] h-[100vh] overflow-hidden' id='Login'>
            <img src={tb} className='w-full  justify-center text-center align-middle' alt="" />
            <div className='absolute w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center top-0 '>
      <Link to={'/'}><img src={llogo} className='h-[10vh] absolute top-0 left-0' alt="" /></Link>
            <form onSubmit={handleSubmit} className="form backdrop-blur-sm bg-[rgba(0,0,0,0.3)] ">
    <h1  id="heading" className=' text-2xl font-bold text-[#CD9564] '>Login</h1>
    <div className="field">
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
      <input autoComplete="off" placeholder="Username" value={credentials} onChange={(e)=>setCredentials(e.target.value)} className="input-field placeholder:text-[#CD9564]" type="text"/>
    </div>
    <div>

      <p className='text-pry text-left text-sm'>Password</p>
    <div className="field">
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field placeholder:text-[#CD9564]"
        type={showPassword ? 'text' : 'password'} // Show password if showPassword is true, otherwise hide it
        />
      <img 
        src={showPassword ? eye : lock} // Display different images based on the showPassword state
        alt="Password toggle"
        onClick={togglePasswordVisibility}
        className="password-toggle-icon w-[7%]"
        />
        </div>
    </div>
    
    <button type='submit' disabled= {loading} className="mb-[2em] text-pry bg-[#171717] rounded border-none hover:text-white hover:bg-pry p-[0.5rem] transition-all ease-in-out duration-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
    
    <p to={"/signup"} className="group text-pry ">Don't have an account? <Link to={'/signup'} className=' group-hover:underline'> Sign Up </Link></p>
    <Link className="button3">Forgot Password</Link>
   
            { loading && <div className='absolute bottom-0 left-0 w-full flex justify-center'><Loader /></div>}
</form>

            </div>
            
 
        </div>
//     <div className=' w-full placeholder:text-[#CD9564] bg-[rgba(10,32,8,0.9)]  flex justify-between ' id='Login'>
//             <div className='flex items-center justify-center w-[55%]'>
//             <form class="form">
//     <h1  id="heading">Login</h1>
//     <div class="field">
//     <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
//     </svg>
//       <input autocomplete="off" placeholder="Username" className="input-field placeholder:text-[#CD9564]" type="text"/>
//     </div>
//     <div class="field">
//     <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
//     </svg>
//       <input placeholder="Password" className="input-field placeholder:text-[#CD9564] " type="password"/>
//     </div>
//     <div class="btn">
//     <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
//     <button class="button2">Sign Up</button>
//     </div>
//     <button class="button3">Forgot Password</button>
// </form>
//             </div>
//             <div className='flex w-[45%] relative'>  
//             <img src={tb} className='w-full  justify-center text-center align-middle' alt="" />
//             <div className='absolute w-full h-full bg-[rgba(10,32,8,0.3)] top 0'></div>
//             </div>
            

//         </div>
  )
}

export default Login