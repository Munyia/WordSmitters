import React from 'react'
import BookCard from './BookCard'

const BookList = ({list}) => {
  return (
    <div className='grid grid-cols-4 gap-10 justify-between w-3/4 mx-auto'>

  {list.map((book,index) => (
            <BookCard key={index} {...book}/>
        ))}
  </div>
  )
}

export default BookList

