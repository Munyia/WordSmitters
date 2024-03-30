import React from 'react'
import { Link } from 'react-router-dom'
import { twitter,llogo } from '../assets'

const Footer = () => {
  return (
    <div className='flex mt-[25%] justify-around  bg-[#CD9564]  text-[rgb(10,32,8)] text-center items-center gap-5 content-center' id='footer'>
        <div className='flex flex-col justify-center  align-middle text-left gap-2'>
            <Link className=' hover:underline'>Company</Link>
            <Link className=' hover:underline'>About us</Link>
            <Link className=' hover:underline'>Terms and Condition</Link>
            <Link className=' hover:underline'>Help & Support</Link>
        </div>
        <p>Connect with us</p>
        <div className='flex flex-col justify-center  align-middle text-left gap-2'>
          <Link className=' hover:underline'>Subscribe to our Newsletter</Link>
          <Link className=' hover:underline'>Automatically sends Message</Link>
        </div>
        <div>    
        {/* <div className="tooltip-container">
  <div className="tooltip">
    <div className="profile">
      <div className="user">
        <div className="img"> <img src={llogo} alt="" /></div>
        <div className="details">
          <div className="name">User</div>
          <div className="username">WordSmitters</div>
        </div>
      </div>
    </div>
  </div>
  <div className="text">
    <a className="icon" href="https://freecodez.com/">
      <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="fab fa-linkedin">
          <svg viewBox="0 0 448 512" height="1em">
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </span>
      </div>
      <div className="text">LinkedIn</div>
    </a>
  </div>
</div>



        <div className="tooltip-container">
        <div className="tooltip">
    <div className="profile">
      <div className="user">
        <div className="img"> <img src={llogo} alt="" /></div>
        <div className="details">
          <div className="name">User</div>
          <div className="username">WordSmitters</div>
        </div>
      </div>
    </div>
  </div>
  <div className="text">
    <a className="icon" href="https://freecodez.com/">
      <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab fa-linkedin">
          <svg viewBox="0 0 448 512" height="1em">
          <img src={twitter} className='w-[30%]' alt=""  />
          </svg>
        </span>
      </div>
      <div className="text"><img src={twitter} className='w-[30%]' alt=""  /></div>
    </a>
  </div>
</div>




<div className="tooltip-container">
<div className="tooltip">
    <div className="profile">
      <div className="user">
        <div className="img"> <img src={llogo} alt="" /></div>
        <div className="details">
          <div className="name">User</div>
          <div className="username">WordSmitters</div>
        </div>
      </div>
    </div>
  </div>
  <div className="text">
    <a className="icon" href="https://freecodez.com/">
      <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab fa-linkedin">
          <svg viewBox="0 0 448 512" height="1em">
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </span>
      </div>
      <div className="text"></div>
    </a>
  </div>
</div> */}





{/* <div className="tooltip-container">
<div className="tooltip">
    <div className="profile">
      <div className="user">
        <div className="img"> <img src={llogo} alt="" /></div>
        <div className="details">
          <div className="name">User</div>
          <div className="username">WordSmitters</div>
        </div>
      </div>
    </div>
  </div>
  <div className="text">
    <a className="icon" href="#">
      <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="facebookSVG">
          <svg
            viewBox="0 0 40 40"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
              y2="407.5726"
              y1="406.6018"
              x2="-277.375"
              x1="-277.375"
              id="a"
            >
              <stop stop-color="#0062e0" offset="0"></stop>
              <stop stop-color="#19afff" offset="1"></stop>
            </linearGradient>
            <path
              d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
              fill="url(#a)"
            ></path>
            <path
              d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
              fill="#fff"
            ></path>
          </svg>
        </span>
      </div>
      <div className="text">Facebook</div>
    </a>
  </div>
</div> */}


        </div>
    </div>
  )
}

export default Footer