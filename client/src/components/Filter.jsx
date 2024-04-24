import React from 'react'
import BookCard from './BookCard';
import { useParams } from 'react-router-dom';
import data from './data';


const Filter = () => {
  const searchText = useParams().search
  console.log(searchText);
  const filtered = data
  .filter(book => 
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
    ) 
    console.log(filtered)

// const Filter = () => {
//   const { search, genre } = useParams(); // Get both search query and genre from URL params

//   const filtered = data.filter(book => {
//     const titleMatch = book.title.toLowerCase().includes(search.toLowerCase());
//     const authorMatch = book.author.toLowerCase().includes(search.toLowerCase());
//     const genreMatch = genre ? book.genre.toLowerCase() === genre.toLowerCase() : true; // Check if genre matches

//     return titleMatch || authorMatch || genreMatch;
//   });
     
  return (
    <div   className=''>
    <p className=' text-[3rem] text-center border-b-2 py-2 mb-6'>{searchText}</p>
    {
      filtered.length>0?
      <div className='grid grid-cols-4 w-4/5 gap-10 mx-auto'>
    {filtered.map((book, index) => (
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