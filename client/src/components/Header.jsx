import React from 'react'
import imageLogo from "../assets/res/imageLogo.jpg"
import "./header.css"

const Header = () => {
  return (
    <div className=' from-[rgb(98,113,98), rgb(255,255,255)] to-[rgb(32,52,31),  rgb(51,69,50))] bg-gradient-to-r flex w-full h-[10vh]' id='Navbar'>
        <img src={imageLogo} alt="" />
        <div class="form-control">
  <input
    type="text"
    placeholder="Search by...."
    class="input input-alt"
  />
  <span class="input-border input-border-alt"></span>
</div>
<div>
  
</div>




    </div>
  )
}

export default Header