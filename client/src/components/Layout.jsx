import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer2 from './Footer2'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer2/>
    </div>
  )
}

export default Layout