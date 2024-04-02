import React from 'react'
import BookCard from './BookCard'
import Header from './Header'
import Footer2 from './Footer2'


const BookList = ({list}) => {
  return (
    <div className='bg-sec'>
          <Header/>
        <div className='grid grid-cols-4 gap-10 justify-between w-3/4 mx-auto pt-3'>
  {list.map((book,index) => (
            <BookCard key={index} {...book}/>
        ))}
      </div>
         <Footer2/>
  </div>
  )
}

export default BookList

