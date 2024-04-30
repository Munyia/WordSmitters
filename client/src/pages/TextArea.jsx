import React, { useState } from 'react';

const TextArea = () => {
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
    <div className='flex flex-col min-h-[80vh] justify-center text-center'>
        <div className='flex h-full gap-5 '>
        <div className='border h-full flex flex-col m-5 rounded-lg'>
        <input type="text" 
        placeholder="Author Name"   
        />
        <input type="text" 
        placeholder="Book Title"   
        />
        <input type="text" 
        placeholder="Year"   
        />
        <input type="text" 
        placeholder="Genre"   
        />
        <input type="text" 
        placeholder="chapters"   
        />
        <input type="text" 
        placeholder="Author Id"   
        />
        <textarea type="text" 
        placeholder="Description"   
        />
            <p className='bg-pry p-2 text-sec justify-items-end align-bottom hover:bg-sec hover:text-white'>Save</p>
        </div>
        <div>
      <h1 className='text-2xl flex  justify-center text-center'>Write your stories</h1>
      <textarea className='m-5 '
        value={text}
        onChange={handleTextChange}
        rows={10} // Adjust the number of rows based on your design
        cols={100} // Adjust the number of columns based on your design
        placeholder="Enter your text here..."
        />
        </div>        
        </div>
      <div>
        <h2>Formatted Text</h2>
        {/* Render formatted text with paragraphs */}
        {formatTextIntoParagraphs(text)}
      </div>
    </div>
   
  );
};

export default TextArea;
