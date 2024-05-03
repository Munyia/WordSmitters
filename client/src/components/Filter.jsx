import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';
import { useParams } from 'react-router-dom';
import data from './data';
import api from '../utils/api';
import Loader from './Loader';


const Filter = () => {
  const { search } = useParams(); // Move this inside the functional component
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  
  const getBooks = async (search)=> {
    setLoading(true)
    try {
      console.log(search);
      const response = await api.get("api/books");
      
      setBooks(response.data.books.filter(book => 
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.genre.toLowerCase().includes(search.toLowerCase()) ||
        book.year.toLowerCase().includes(search.toLowerCase()) ||
        book.authorName.toLowerCase().includes(search.toLowerCase())
      ))
      console.log(response.data.books);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getBooks(search)
  },[search])
  
  

  return (loading?<Loader/>:
    <div   className=''>
    <p className=' text-[3rem] text-center border-b-2 py-2 mb-6'>{books && search}</p>
    {
      books.length>0?
      <div className='grid grid-cols-4 w-4/5 gap-10 mx-auto'>
    {books.map((book, index) => (
        <BookCard key={index} {...book}/>
     ))}</div>:
     <div>
      <p className='text-[red] text-3xl font-bold text-center'>Does not match any books or authors</p>
     </div>

    }
  
</div>
  )
}

export default Filter