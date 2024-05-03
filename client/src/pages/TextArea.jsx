import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import api from "../utils/api";
import BookCreated from "../components/BookCreated";

const TextArea = () => {
  document.title = "Text Area";
  const [currentChapter, setCurrentChapter] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const publisher = "WordSmitters";
  const year = new Date().getFullYear();
  const [coverImage, setCoverImage] = useState("");
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const addChapter = () => {
    setChapters(prevChapters => {
      const updatedChapters = [...prevChapters];
      updatedChapters[currentChapter - 1] = text; // Update the specific index
      return updatedChapters;
    });    
    setCurrentChapter(currentChapter + 1);
    setText('')
  };
  const saveChapter = () => {
    setChapters((prev)=> {prev[currentChapter-1]=text})
  };
  console.log(chapters)
  

  // State to store the textarea value
  const [text, setText] = useState("");

  // Function to format text into paragraphs
  const formatTextIntoParagraphs = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("api/books", {
        genre,
        publisher,
        year,
        coverImage,
        title,
        description,
        chapters,
      });
      console.log(response);
      setShowSuccess(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false); // Toggle loading state off after request error
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (loading?<Loader/>:showSuccess?<BookCreated/>:
    <form
      onSubmit={handleSubmit}
      className="flex  mt-3 w-full min-h-[80vh] justify-center "
    >
      <div className="flex h-[100%] w-full gap-3  ">
        <div className="border h-[100%] w-[15%] gap-10 flex justify-between flex-col mx-5 rounded-lg">
          <div className="h-[100%]">
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="coverimage" className="border p-2 inline-block">
              Cover Image
            </label>
            <input
              type="file"
              id="coverimage"
              className=" hidden"
              onChange={handleImageChange}
            />

            <button
              type="submit"
              className="bg-pry p-2 text-sec w-full rounded-md text-center justify-center align-bottom hover:bg-sec hover:text-white"
            >
              Add Book
            </button>
          </div>
          <div className="w-full">
            <p
              onClick={addChapter}
              className="border  cursor-pointer bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center"
            >
              Add Chapter
            </p>
          </div>
        </div>
        <div className="w-[85%] px-10">
          <h1 className="text-3xl flex  text-sec  ">Write your stories</h1>
          <p className="text-5xl text-sec font-serif font-bold text-center ">
            Chapter {currentChapter}
          </p>
          <textarea
            className="w-full"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            rows={15} // Adjust the number of rows based on your design
            cols={100} // Adjust the number of columns based on your design
            placeholder="Enter your text here..."
          />
        </div>
      </div>
      {/* <div> */}
        {/* <div className="flex justify-between text-black text-center mt-8 "> */}
          
          {/* {
                bookDetails.chapters && currentChapter!==bookDetails.chapters.length && <p onClick={nextChapter} className='border w-[15%] bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center'>Next Chapter</p>
            } */}
        {/* </div> */}
        {/* <h2>Formatted Text</h2> */}
        {/* Render formatted text with paragraphs */}
        {/* {formatTextIntoParagraphs(text)} */}
      {/* </div> */}
    </form>
  );
};

export default TextArea;
