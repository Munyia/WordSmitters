import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';

function Profile({ userId }) {
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
//     axios.get(`http://localhost:5000/users/${userId}`)
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(error => console.error('Error fetching user data:', error));
//   }, [userId]);

  return (
    <div className='flex  '>
    <div  className='flex flex-col gap-4  items-center  text-sec '>

      {user ? (
        <div className=' border rouded py-10 px-10 justify-center text-center ml-10 my-10'>
          <img className='w-[100%] text-pry text-[3rem] flex justify-center items-center aspect-square bg-sec rounded-full overflow-hidden' src={user.profileImage} alt="" />
          <div className='flex gap-5 font-bold text-center justify-center'>
          <h1 className='text-xl'>{user.firstname}</h1>
          <h1 className='text-xl'>{user.lastname}</h1>
          </div>
          <h1 className='font-bold'>{user.username}</h1>
          <p className='text-blue-500 font-bold'>Email: {user.email}</p>
          <p>Joined: {new Date(user.joinDate).toLocaleDateString()}</p>
          {/* <p>Currently Reading: {user.currentReading.title}</p> */}
          {/* More user details and edit link */}
        </div>
      ) : (
       <div className=" bottom-0 left-0 w-full flexh-[50vh] justify-center">
              <Loader />
            </div>
      )}
    </div>
    </div>
  );
}

export default Profile;
