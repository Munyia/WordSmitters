import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom'

const TextArea = () => {
    document.title= "Text Area"
    const [currentChapter, setCurrentChapter]= useState(1)
    const [bookDetails, setBookDetails]= useState({})
    const { id } = useParams(); // Move this inside the functional component
    const getBookdetails = async (id) => {
        try {
          const response = await api.get(`api/books/${id}`, {
          });
          setBookDetails(response.data)
          console.log(response);
        } catch (error) {
          console.log(error);
          if (error.response.status === 401) {
            setNotLoggedIn(true)
          }
        } 
      };
      useEffect(() => {
        getBookdetails(id)
    
      },[id])

      const nextChapter = () => {
        setCurrentChapter(currentChapter+1)
      }
      const prevChapter = () => {
        setCurrentChapter(currentChapter-1)
      }

  // State to store the textarea value
  const [text, setText] = useState('');

  // Function to handle textarea value change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Function to format text into paragraphs
  const formatTextIntoParagraphs = (text) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <div className='flex flex-col mt-3 w-full min-h-[80vh] justify-center text-center'>
        <div className='flex h-[100%] w-full gap-3 items-stretch '>
        <div className='border h-full w-[15%] gap-2 flex justify-center flex-col mx-5 rounded-lg'>
          <div className='h-[100%]'>
        <input type="text" 
        placeholder="Book Title"   
        />
        <input type="text" 
        placeholder="Year"   
        />
        <input type="text" 
        placeholder="Genre"   
        />
  
        <textarea type="text" 
        placeholder="Description"   
        />
            <p className='bg-pry p-2 text-sec w-[45%] rounded-md text-center justify-center align-bottom hover:bg-sec hover:text-white'>Save</p>
        </div>
        </div>
        <div className='w-[85%]'>
      <h1 className='text-3xl flex  text-sec  '>Write your stories</h1>
      <p className='text-5xl text-sec font-serif font-bold text-center '>Chapter {currentChapter}</p>
      <textarea className=' '
        value={text}
        onChange={handleTextChange}
        rows={15} // Adjust the number of rows based on your design
        cols={100} // Adjust the number of columns based on your design
        placeholder="Enter your text here..."
        />
        </div>   
        </div>
      <div>
        <div className='flex justify-between text-black text-center mt-8 '>
            <div className='w-[15%]'>{
                currentChapter!==1 && <p onClick={prevChapter} className='border  bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center'>Previous Chapter</p>
            }
            </div>
            {
                bookDetails.chapters && currentChapter!==bookDetails.chapters.length && <p onClick={nextChapter} className='border w-[15%] bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center'>Next Chapter</p>
            }
        </div>     
        <h2>Formatted Text</h2>
        {/* Render formatted text with paragraphs */}
        {formatTextIntoParagraphs(text)}
      </div>
    </div>
   
  );
};

export default TextArea;
