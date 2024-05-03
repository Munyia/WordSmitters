import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import BookCard from '../components/BookCard';
import DeleteModal from '../components/DeleteModal';
import { Link } from 'react-router-dom';

function WriterProfile({ userId }) {
  document.title= "Writer Profile"
//   const [user, setUser] = useState(null);

const [fileInput, setFileInput] = useState(null);



const handleFileChange = (event) => {
  setFileInput(event.target.files[0]);
};


const handleBookUpload = async () => {
  try {
    setLoading(true);
    const formData = new FormData();
    formData.append('book', fileInput);
    const response = await axios.post('/api/books/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    setUploadedBooks([...uploadedBooks, response.data]);
    setLoading(false);
  } catch (error) {
    console.error('Error uploading book:', error);
    setLoading(false);
  }
};

const currentlyReadingBooks = [
  { title: 'Book 1', author: 'Author 1', coverImage: 'book1.jpg', description: 'Description 1', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1'},
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  // Add more books as needed
];
const purchasedBooks = [
  { title: 'Book 1', author: 'Author 1', coverImage: 'book1.jpg', description: 'Description 1', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1'},
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  // Add more books as needed
];
const readingListBooks = [
  { title: 'Book 1', author: 'Author 1', coverImage: 'book1.jpg', description: 'Description 1', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1'},
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  // Add more books as needed
];

const uploadedBooks = [
  { title: 'Book 1', author: 'Author 1', coverImage: 'book1.jpg', description: 'Description 1', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1'},
  { title: 'Book 2', author: 'Author 2', coverImage: 'book2.jpg', description: 'Description 2', publisher: 'Publisher 1', year: 'Year 1', genre: 'Genre 1', chapters: 'Chapters 1' },
  // Add more books as needed
];

const [loading, setLoading] = useState(false);
const [user, setUser] = useState({
  firstname: "Munyia",
  lastname: "Ranjo",
  username: "@Mudijo",
  email: "munijo@gmail.com",
  joinDate: new Date(),
  profileImage: "",
  // other fields...
});

const getInitials = (firstname, lastname) => {
  return `${firstname[0]}${lastname[0]}`;
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setUser({...user, profileImage: reader.result});
  };
  reader.readAsDataURL(file);
};


//   useEffect(() => {
//     axios.get(`http://localhost:8081/users/${userId}`)
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [userId]);

return (
  <div className='bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] w-full  to-[rgb(6,49,6)] '>
    {user ? (
      <div className='flex border text-black py-2 px-2 '>
        <div className='border shadow-2xl mr-2 max-h-[80vh]  bg-white rounded-3xl justify-center flex flex-col gap-2 items-center w-[23%]'>
          {user.profileImage ? (
            <div className='w-[50%] flex justify-center items-center aspect-square bg-pry rounded-full overflow-hidden text-white text-[3rem]'>
            <img className='w-full rounded-full overflow-hidden'
              src={user.profileImage} alt="Profile"
              />
              </div>
          ) : (
            <div className='w-[50%] flex justify-center items-center aspect-square bg-pry rounded-full overflow-hidden text-white text-[3rem]'>
              {getInitials(user.firstname, user.lastname)}
            </div>
            
          )}
          <input type="file" onChange={handleImageChange} className="my-1" />
          <div className='flex text-white gap-2 font-bold text-center justify-center'>
            <h1 className='text-xl'>{user.firstname}</h1>
            <h1 className='text-xl'>{user.lastname}</h1>
          </div>
          <h1 className='font-bold text-black'>{user.username}</h1>
          <p className='text-blue-500 font-bold'>Email: {user.email}</p>
          <p className='text-black'>Joined: {new Date(user.joinDate).toLocaleDateString()}</p>
          <Link to={'/updateprofile'}className='bg-pry p-2 text-sec hover:bg-sec hover:text-white'> Update Profile</Link>
          <Link className='bg-pry p-2 text-sec hover:bg-sec hover:text-white' to={'/textarea'}>Start Writing</Link>
       
        </div>
        <div className='flex gap-5 text-sec font-bold flex-col w-full h-[80vh] overflow-y-scroll flex-nowrap [&::-webkit-scrollbar]:hidden'>
        {/* <div className='w-full bg-white rounded-3xl border min-h-[40vh] pt-5 text-lg flex overflow-x-scroll [&::-webkit-scrollbar]:hidden '>Currently Reading</div>
        <div className='w-full bg-white rounded-3xl border min-h-[40vh]  pt-5 text-lg overflow-x-scroll [&::-webkit-scrollbar]:hidden'>Reading Lists</div>
        <div className='w-full bg-white rounded-3xl border  min-h-[40vh] pt-5 text-lg overflow-x-scroll [&::-webkit-scrollbar]:hidden'>Purchased Books</div>
         */}

        <div className='w-full bg-white  text-sec mt font-bold  rounded-3xl border min-h-[40vh] pt-5 text-lg   '>
          <div className='flex'>
          <h2 className="section-title">Currently Reading</h2>
          </div>
          <div className="  h-full pl-3 flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
            {currentlyReadingBooks.map((book, index) => (
              <div className='min-w-[15%] '>
              <BookCard key={index} {...book} />
              </div>
            ))}
            </div>
        </div>
        <div className='w-full bg-white text-sec font-bold justify-center text-center rounded-3xl border min-h-[40vh] pt-5 text-lg   '>
          <div className='flex'>
          <h2 className="section-title">Purchased Books</h2>
          </div>
          <div className="  h-full pl-3 flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
            {purchasedBooks.map((book, index) => (
              <div className='min-w-[15%] '>
              <BookCard key={index} {...book} />
              </div>
            ))}
            </div>
        </div>
        <div className='w-full bg-white   text-sec font-bold  justify-center text-center rounded-3xl border min-h-[40vh] pt-5 text-lg   '>
          <div className='flex'>
          <h2 className="section-title">Reading List</h2>
          </div>
          <div className="  h-full pl-3 text-s flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
            {readingListBooks.map((book, index) => (
              <div className='min-w-[15%] '>
              <BookCard key={index} {...book} />
              </div>
            ))}
            </div>
        </div>
        </div>
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
