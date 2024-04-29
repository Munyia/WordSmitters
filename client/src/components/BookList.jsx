import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import api from '../utils/api'


const BookList = ({list}) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const getBooks = async ()=> {
  setLoading(true)
    try {
      const response = await api.get("api/books");
      setBooks(response.data.books)
      console.log(response.data.books);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getBooks()
  },[])
  
  return (
    <div className='bg-sec py-10'>
        <div className='grid grid-cols-4 gap-10 justify-between w-3/4 mx-auto pt-3'>
  {books && books.map((book,index) => (
            <BookCard key={index} {...book}/>
        ))}
      </div>
  </div>
  )
}

export default BookList

