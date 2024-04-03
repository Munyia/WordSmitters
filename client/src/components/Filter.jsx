import React from 'react'
import BookCard from './BookCard';


const Filter = ({list, title, author}) => {
  console.log(list);
  return (
    <div   className=' flex  justify-center gap-x-4 gap-y-4 border'>
    {
    title && 
    author &&
    list
    .filter(book => 
        book.title.toLowerCase().includes(title.toLowerCase())
      ) 
      .filter((book) =>book.rating == author) 
      .map((book, index) => (
        <BookCard
        key={index} 
        title={book.title} 
        author={ book.author}
        description={book.description}
        posterURL={book.posterURL}
        publisher={book.publisher}
        year={book.year}
        genre={book.genre}  
        />
     ))}
    {
    title && 
    !author &&
    list
    .filter(book => 
        book.title.toLowerCase().includes(title.toLowerCase())
      ) 
      .map((book, index) => (
        <BookCard 
        key={index} 
        title={book.title} 
        author={ book.author}
        description={book.description}
        posterURL={book.posterURL}
        publisher={book.publisher}
        year={book.year}
        genre={book.genre}  
        />
     ))}
    {
    !title && 
    author &&
    list
      .filter((book) =>book.author == author) 
      .map((book, index) => (
        <BookCard
        key={index} 
        title={book.title} 
        author={ book.author}
        description={book.description}
        posterURL={book.posterURL}
        publisher={book.publisher}
        year={book.year}
        genre={book.genre}  
        />
     ))}
  
</div>

  )
}

export default Filter