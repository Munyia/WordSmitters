import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

function UserProfile({ userId }) {
//   const [user, setUser] = useState(null);

const [loading, setLoading] = useState(false);
const user ={
  id: userId,
  username: "@ Mudijo",
  email: "munijo@gmail.com",
  firstname: "Munyia",
  lastname: "Ranjo",
}

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
    <div className='bg-sec'>
      {user ? (
      <div className='flex flex-col w-1/2 gap-4   '>
         <div className=' border shadow-2xl justify-start w-[30%]  rouded py-10 px-10 ml-10 my-10'>
         <img className='w-[10%] text-pry text-[3rem] flex justify-center items-center aspect-square bg-pry rounded-full overflow-hidden' src={user.profileImage} alt="" />
         <div className='flex text-white gap-5 font-bold text-center justify-center'>
         <h1 className='text-xl'>{user.firstname}</h1>
         <h1 className='text-xl'>{user.lastname}</h1>
         </div>
         <h1 className='font-bold text-white'>{user.username}</h1>
         <p className='text-blue-500 font-bold'>Email: {user.email}</p>
         <p className='text-white'>Joined: {new Date(user.joinDate).toLocaleDateString()}</p>
         {/* <p>Currently Reading: {user.currentReading.title}</p> */}
         {/* More user details and edit link */}
       </div>
       <div>

       </div>
      </div>
      ) : 
      <div className=" bottom-0 left-0 w-full flexh-[50vh] justify-center">
      <Loader />
    </div>
      }
    </div>
  );
}

export default UserProfile;
