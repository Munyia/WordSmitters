import React from 'react'
import Header from '../components/Header'
import Footer2 from '../components/Footer2'
import { Route, Routes } from 'react-router-dom'
import Filter from '../components/Filter'
import BookList from '../components/BookList'
import data from '../components/data'

const Books = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<BookList list={data}/>}/>
            <Route path='/:search' element={<Filter list={data}/>}/>
        </Routes>

        <Footer2/>
    </div>
  )
}

export default Books