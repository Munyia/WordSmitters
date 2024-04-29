import React from 'react'
import "./login.css"
import { tb, llogo, lock, eye } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loader from '../components/Loader'
import api from '../utils/api'

const UpdateProfile = () => {
  document.title= "Update Profile"
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isBioFocused, setIsBioFocused] = useState(false);


  document.title = "Sign Up";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFirstNameFocus = () => {
    setIsFirstNameFocused(true);
  };

  const handleFirstNameBlur = () => {
    if (!firstname) {
      setIsFirstNameFocused(false);
    }
  };

  const handleLastNameFocus = () => {
    setIsLastNameFocused(true);
  };

  const handleLastNameBlur = () => {
    if (!lastname) {
      setIsLastNameFocused(false);
    }
  };
  console.log(errors)

  
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };
  
  const handleEmailBlur = () => {
    if (!email) {
      setIsEmailFocused(false);
    }
  };
  
  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };
  
  const handleUsernameBlur = () => {
    if (!username) {
      setIsUsernameFocused(false);
    }
  };
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setIsPasswordFocused(false);
    }
  };

  const handleBioFocus = () => {
    setIsBioFocused(true);
  };

  const handleBioBlur = () => {
    if (!bio) {
      setIsBioFocused(false);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Email validation
    if (!validateEmail(email)) {
      setLoading(false);
      setErrors("Please enter a valid email address.");
      return;
    }
    // Password validation
    if (password.length < 6) {
      setLoading(false);
      setErrors("Password must be at least 6 characters long.");
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setLoading(false);
      setErrors("Passwords do not match.");
      return;
    }

    console.log(email, password);
    try {
      const response = await api.post('api/users', { firstname, lastname, username, bio, email, password });
      console.log(response);
      setLoading(false);
      setSuccessful(true); // Toggle loading state off after successful request
    } catch (error) {
      console.log(error);
      setLoading(false); // Toggle loading state off after request error
      setErrors(error.response.data);
    }
  };
   // Function to validate email format
   const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };


  return (
    <div className="w-full placeholder:text-[#CD9564] bg-[rgba(10,32,8,0.9)] h-[100vh]  overflow-hidden" id="Login">
      <img src={tb} className="w-full justify-center text-center align-middle" alt="" />
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center top-0 ">
        <Link to={"/"}>
          <img src={llogo} className="h-[10vh] absolute z-50 top-0 left-0" alt="" />
        </Link>
        <form onSubmit={handleSubmit} className="flex text-center transition ease-in-out duration-300 hover:scale-105 hover:border border-pry flex-col gap-3 rounded-3xl pb-[0.4em] justify-center items-center p-4 sm:px-10 overflow-clip backdrop-blur-sm bg-[rgba(0,0,0,0.3)] h-full sm:h-auto">
          <h1 id="heading" className="text-2xl font-bold mb[-60] text-[#CD9564]">Update Profile</h1>
          <div className="w-full flex gap-4 flex-col">
            <div className=" flex gap-2 sm:gap-10 sm:flex-row flex-col">
            <div className="field w-full">
              <input
                autoComplete="off"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className={`input-field flex-1 placeholder:text-[#CD9564] ${isFirstNameFocused || firstname ? 'focus:border-black  py-1 px-2 border-b' : ''}`}
                type="text"
                id="firstname"
                onFocus={handleFirstNameFocus}
                onBlur={handleFirstNameBlur}
              />
              <label htmlFor="firstname" className={` ${isFirstNameFocused || firstname ? 'text-white' : 'text-pry'} transition-all duration-300 ${isFirstNameFocused ? '-translate-y-5 text-sm' : 'translate-y-0 text-base'} absolute`}>First Name</label>
              </div>
            <div className="field w-full">
            <input
                autoComplete="off"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className={`input-field  placeholder:text-[#CD9564] ${isLastNameFocused || lastname ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                id="lastname"
                onFocus={handleLastNameFocus}
                onBlur={handleLastNameBlur}
                />
              <label htmlFor="lastname" className={` ${isLastNameFocused || lastname ? 'text-white' : 'text-pry'} transition-all duration-300 ${isLastNameFocused ? '-translate-y-5 text-sm' : 'translate-y-0 text-base'} absolute`}>Last Name</label>
                </div>
                </div>
                <div className="flex gap-2 sm:gap-10 sm:flex-row flex-col">
            <div className=" field w-full">
              <input
                autocomplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isEmailFocused || email ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                id="email"
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
              <label htmlFor="email" className={` ${isEmailFocused || email ? 'text-white' : 'text-pry'} transition-all duration-300 ${isEmailFocused ? '-translate-y-5 text-sm' : 'translate-y-0 text-base'} absolute`}>Email</label>
              </div>
              <div className=" field w-full">
              <input
                autocomplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isUsernameFocused || username ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                id="username"
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
              />
              <label htmlFor="username" className={` ${isUsernameFocused || username? 'text-white' : 'text-pry'} transition-all duration-300 ${isUsernameFocused ? '-translate-y-5 text-sm' : 'translate-y-0 text-base'} absolute`}>Username</label>
            </div>
            </div>
              <div className="field w-full">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`input-field placeholder:text-[#CD9564] ${isPasswordFocused || password ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                  type={showPassword ? "text" : "password"} // Show password if showPassword is true, otherwise hide it
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  id="password"
                />
                <label htmlFor="password" className={` ${isPasswordFocused || password? 'text-white' : 'text-pry'} transition-all duration-300 ${isPasswordFocused ? '-translate-y-5 text-sm' : 'translate-y-0 text-base'} absolute`}>Password</label>
                <img
                  src={showPassword ? eye : lock} // Display different images based on the showPassword state
                  alt="Password toggle"
                  onClick={togglePasswordVisibility}
                  className="password-toggle-icon w-[7%]"
                />
              </div>
             <div className="flex gap-2 sm:gap-10 sm:flex-row flex-col">
              <div className="field w-full">
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className={`input-field placeholder:text-[#CD9564] ${isBioFocused || bio? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                  onFocus={handleBioFocus}
                  onBlur={handleBioBlur}
                  id="bio"
                  rows={5} // Set the number of rows for the textarea
                />
                <label htmlFor="bio" className={` ${isBioFocused || bio? 'text-white' : 'text-pry'} transition-all duration-300 ${isBioFocused ? '-translate-y-5 text-sm' : 'translate-y-0 text-base'} absolute`}>Bio</label>
              </div>
            </div>
            <div>
            <button type='submit' disabled= {loading} className="mb-[0.5em] mt-2 disabled:bg-sec text-pry bg-[#171717] rounded border-none hover:text-white hover:bg-pry p-[0.5rem] px-6 transition-all ease-in-out duration-500">Update Profile</button>
            </div>
          </div>
          
          <p to={"/updateprofile"} className="group text-pry ">
            Back to {" "}
            <Link to={"/updateprofile"} className=" group-hover:underline">
              Profile
            </Link>
          </p>
          {loading && (
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <Loader />
            </div>
          )}
        </form>
      </div>
      {
        successful && <RegistrationSuccesful/>
      }
    </div>
  );
};

export default UpdateProfile;
