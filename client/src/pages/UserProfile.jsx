import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

function UserProfile({ userId }) {
//   const [user, setUser] = useState(null);

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


const deleteProfileImage = () => {
  setUser({...user, profileImage: ''}); // Clears the profile image state
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
      <div className='flex border text-black py-4 px-2 '>
        <div className='border shadow-2xl mr-2 max-h-[80vh]  bg-white rounded-3xl justify-center flex flex-col gap-5 items-center w-[23%]'>
          {user.profileImage ? (
            <img className='w-[50%] rounded-full overflow-hidden'
              src={user.profileImage} alt="Profile"
            />
          ) : (
            <div className='w-[50%] flex justify-center items-center aspect-square bg-pry rounded-full overflow-hidden text-white text-[3rem]'>
              {getInitials(user.firstname, user.lastname)}
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
        </div>
        <div className='flex gap-5 text-sec font-bold flex-col w-full h-[80vh] overflow-y-scroll flex-nowrap [&::-webkit-scrollbar]:hidden'>
        <div className='w-full bg-white rounded-3xl border min-h-[40vh] pt-5 text-lg flex overflow-x-scroll [&::-webkit-scrollbar]:hidden '>Currently Reading</div>
        <div className='w-full bg-white rounded-3xl border min-h-[40vh]  pt-5 text-lg overflow-x-scroll [&::-webkit-scrollbar]:hidden'>Reading Lists</div>
        <div className='w-full bg-white rounded-3xl border  min-h-[40vh] pt-5 text-lg overflow-x-scroll [&::-webkit-scrollbar]:hidden'>Purchased Books</div>
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


export default UserProfile;
