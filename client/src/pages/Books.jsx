import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

const Books = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Books