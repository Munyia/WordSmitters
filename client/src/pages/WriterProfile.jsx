import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../components/Loader';

function WriterProfile({ userId }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstname: "Munyia",
    lastname: "Ranjo",
    username: "@Mudijo",
    email: "munijo@gmail.com",
    joinDate: new Date(),
    profileImage: "",
    writtenContent: "",
    // other fields...
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({...user, profileImage: reader.result});
    };
    reader.readAsDataURL(file);
  };

  const handleContentChange = (event) => {
    setUser({...user, writtenContent: event.target.value});
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

  return (
    <div className='bg-gradient-to-br from-[rgb(11,31,10)] h-fit via-[rgb(7,49,3)] to-[rgb(6,49,6)] justify-around text-center'>
      {user ? (
        <div className='flex border min-h-[80vh] gap-5 text-black justify-center text-center py-5 px-5 '>
          <div className='border shadow-2xl bg-white rounded-3xl justify-center flex flex-col gap-5 items-center w-[23%]'>
            {user.profileImage ? (
              <img className='w-[50%] rounded-full overflow-hidden' src={user.profileImage} alt="Profile" />
            ) : (
              <div className='w-[50%] flex justify-center items-center aspect-square bg-pry rounded-full overflow-hidden text-white text-[3rem]'>
                {user.firstname[0]}{user.lastname[0]}
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
            <button onClick={saveContent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Writing
            </button>
            <button onClick={uploadContent} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Publish Book
            </button>
          </div>
          <textarea
            value={user.writtenContent}
            onChange={handleContentChange}
            placeholder="Write your book here..."
            className="w-full  p-4 border-2 border-gray-300 rounded-lg overflow-auto resize-none"
            style={{ minHeight: '300px', maxHeight: '500px' }}
          />
        </div>
      ) : 
        <Loader />
      }
    </div>
  );
}


export default WriterProfile;
