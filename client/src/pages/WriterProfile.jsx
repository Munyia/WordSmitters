import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../components/Loader';
import dropdown from '../assets/res/dropdown.gif'

function WriterProfile({ userId }) {
  const [loading, setLoading] = useState(false);
  const [showWritingArea, setShowWritingArea] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState({
    firstname: "Munyia",
    lastname: "Ranjo",
    username: "@Mudijo",
    email: "munijo@gmail.com",
    joinDate: new Date(),
    profileImage: "",
    writtenContent: "",
    savedBooks: [], // Array of books with title, author, description, and image
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUser({...user, profileImage: reader.result});
    };
  };
  const toggleProfileVisibility = () => {
    setShowProfile(!showProfile); // Toggle visibility of the profile
  };


  const handleContentChange = (event) => {
    setUser({...user, writtenContent: event.target.value});
  };

  const toggleWritingArea = () => {
    setShowWritingArea(!showWritingArea);
  };

  const uploadBook = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const newBook = {
        id: user.savedBooks.length + 1,
        title: "New Book", // Placeholder title
        author: "Author Name", // Placeholder author
        description: "Description here", // Placeholder description
        image: reader.result
      };
      setUser({...user, savedBooks: [...user.savedBooks, newBook]});
    };
  };

  const deleteBook = (bookId) => {
    setUser({...user, savedBooks: user.savedBooks.filter(book => book.id !== bookId)});
  };

  const saveContent = () => {
    console.log("Saving content:", user.writtenContent);
    // Here you might want to send the content to a backend server
    // axios.post('your-api-endpoint', {content: user.writtenContent})
    //   .then(response => console.log('Content saved'))
    //   .catch(error => console.error('Error saving content', error));
  };

  const uploadContent = () => {
    console.log("Uploading content");
    // Similar to saveContent, but maybe initiating a publishing workflow
  };

  const deleteProfileImage = () => {
    setUser({...user, profileImage: ''}); // Clears the profile image state
  };

  const getInitials = () => {
    return `${user.firstname[0]}${user.lastname[0]}`;
  };

  return (
    <div className=' overflow-scroll'>
      {user ? (
        <div className='flex gap-5 text-black justify-center text-center py-5  '>
          <img src={dropdown} alt="Toggle Profile" onClick={toggleProfileVisibility} className='w-10 h-10 justify-start absolute cursor-pointer'/>
          {showProfile && (
            <div className='shadow-black shadow-2xl max-h-[90vh] relative bg-white rounded-3xl justify-center flex flex-col gap-5 items-center w-[23%]'>
              {user.profileImage ? (
                <img className='rounded-full aspect-square overflow-hidden' src={user.profileImage} alt="Profile" />
              ) : (
                <div className='flex justify-center items-center aspect-square bg-pry rounded-full overflow-hidden text-white text-3xl'>
                  {getInitials()}
                </div>
              )}
              <div className='flex text-white gap-5 font-bold text-center justify-center'>
                <h1 className='text-xl'>{user.firstname}</h1>
                <h1 className='text-xl'>{user.lastname}</h1>
              </div>
              <h1 className='font-bold text-black'>{user.username}</h1>
              <p className='text-blue-500 font-bold'>Email: {user.email}</p>
              <p className='text-black'>Joined: {new Date(user.joinDate).toLocaleDateString()}</p>
              <input type="file" onChange={handleImageChange} className="my-2" />
              <button onClick={deleteProfileImage} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete Image
              </button>
            </div>
          )}

       
            <div className='flex relative flex-col mt-10 gap-10 min-w-[100vh]'>
            <div className='flex min-h-[50%] flex-col min-w-[100vh]  shadow-black shadow-2xl   overflow-scroll bg-white rounded-3xl border  pt-5 text-lg '>
            <input type="file" onChange={uploadBook} className="my-2" />
            {user.savedBooks.map(book => (
              <div key={book.id} className='bg-white rounded-3xl border p-3 my-2'>
                <h3 className='text-lg'>{book.title} - {book.author}</h3>
                <p>{book.description}</p>
                <img src={book.image} alt={book.title} className='w-[100px] rounded' />
                <button onClick={() => deleteBook(book.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
              </div>
            ))}
          </div>
          <div className='min-h-[50%] bg-white rounded-3xl border  shadow-black shadow-2xl  overflow-scroll  pt-5 text-lg '>Currently Reading</div>
        <div className='min-h-[50%] bg-white rounded-3xl border  shadow-black shadow-2xl  overflow-scroll  pt-5 text-lg '>Reading Lists</div>
        <div className='min-h-[50%] mb-10 bg-white rounded-3xl  shadow-black shadow-2xl  border overflow-scroll  pt-5 text-lg '>Purchased Books</div>
            </div>
     
          {/* <textarea
            value={user.writtenContent}
            onChange={handleContentChange}
            placeholder="Write your book here..."
            className="w-full  p-4 border-2 border-gray-300 rounded-lg overflow-auto resize-none"
            style={{ minHeight: '300px' }}
          /> */}
        </div>
      ) : 
      
      <div className="bottom-0 left-0 w-full flex h-[50vh] justify-center">
      <Loader />
    </div>
      }
    </div>
  );
}


export default WriterProfile;
