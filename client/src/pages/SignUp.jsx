import React, { useState } from "react";
import "./login.css";
import { tb, llogo, lock, eye } from "../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import RegistrationSuccesful from "../components/RegistrationSuccessful";
import api from "../utils/api";

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [isGenderFocused, setIsGenderFocused] = useState(false);
  const [isDobFocused, setIsDobFocused] = useState(false);


  document.title = "Sign Up";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setIsPasswordFocused(false);
    }
  };

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

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword) {
      setIsConfirmPasswordFocused(false);
    }
  };

  const handleGenderFocus = () => {
    setIsGenderFocused(true);
  };

  const handleGenderBlur = () => {
    if (!gender) {
      setIsGenderFocused(false);
    }
  };

  const handleDobFocus = () => {
    setIsDobFocused(true);
  };

  const handleDobBlur = () => {
    if (!DOB) {
      setIsDobFocused(false);
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
      const response = await api.post('users', { firstname, lastname, username, gender, DOB, email, password });
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
      <div className="absolute w-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center top-0 ">
        <Link to={"/"}>
          <img src={llogo} className="h-[10vh] absolute top-0 left-0" alt="" />
        </Link>
        <form onSubmit={handleSubmit} className="form overflow-clip backdrop-blur-sm bg-[rgba(0,0,0,0.3)]">
          <h1 id="heading" className="text-2xl font-bold mb[-60] text-[#CD9564]">Sign Up</h1>
          <div className="w-full flex gap-1 flex-col">
            <div className="field flex gap-10">
            <div className=" flex-grow">
              <input
                autoComplete="off"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className={`input-field flex-1 placeholder:text-[#CD9564] ${isFirstNameFocused || firstname ? 'focus:border-black  py-1 px-2 border-b' : ''}`}
                type="text"
                onFocus={handleFirstNameFocus}
                onBlur={handleFirstNameBlur}
              />
              <label className={` ${isFirstNameFocused || firstname ? 'text-white' : 'text-pry'} transition-all duration-300 ${isFirstNameFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>First Name</label>
              </div>
            <div className=" flex-grow">
            <input
                autoComplete="off"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className={`input-field  placeholder:text-[#CD9564] ${isLastNameFocused || lastname ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                onFocus={handleLastNameFocus}
                onBlur={handleLastNameBlur}
                />
              <label className={` ${isLastNameFocused || lastname ? 'text-white' : 'text-pry'} transition-all duration-300 ${isLastNameFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>Last Name</label>
                </div>
                </div>
                <div className="field flex gap-10 ">
            <div className=" flex-grow">
              <input
                autocomplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isEmailFocused || email ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
              <label className={` ${isEmailFocused || email ? 'text-white' : 'text-pry'} transition-all duration-300 ${isEmailFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>Email</label>
              </div>
              <div className=" flex-grow">
              <input
                autocomplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isUsernameFocused || username ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
              />
              <label className={` ${isUsernameFocused || username? 'text-white' : 'text-pry'} transition-all duration-300 ${isUsernameFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>Username</label>
            </div>
            </div>
            <div className="field flex gap-10 ">
            <div className=" flex-grow">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isPasswordFocused || password ? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type={showPassword ? "text" : "password"} // Show password if showPassword is true, otherwise hide it
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <label className={` ${isPasswordFocused || password? 'text-white' : 'text-pry'} transition-all duration-300 ${isPasswordFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>Password</label>
              <img
                src={showPassword ? eye : lock} // Display different images based on the showPassword state
                alt="Password toggle"
                onClick={togglePasswordVisibility}
                className="password-toggle-icon w-[7%]"
              />
                 </div>
                 <div className=" flex-grow">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isConfirmPasswordFocused || confirmPassword? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type={showPassword ? "text" : "Confirm password"} // Show password if showPassword is true, otherwise hide it
                onFocus={handleConfirmPasswordFocus}
                onBlur={handleConfirmPasswordBlur}
              />
              <label className={` ${isConfirmPasswordFocused || confirmPassword? 'text-white' : 'text-pry'} transition-all duration-300 ${isConfirmPasswordFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>Confirm Password</label>
              <img
                src={showPassword ? eye : lock} // Display different images based on the showPassword state
                alt="Password toggle"
                onClick={togglePasswordVisibility}
                className="password-toggle-icon w-[7%]"
              />
            </div>
            </div>
            <div className="field flex gap-10 ">
            <div className=" flex-grow">
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isGenderFocused || gender? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                onFocus={handleGenderFocus}
                onBlur={handleGenderBlur}
              />
              <label className={` ${isGenderFocused || gender? 'text-white' : 'text-pry'} transition-all duration-300 ${isGenderFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>Gender</label>
              </div>
              <div className=" flex-grow"> 
              <input
                value={DOB}
                onChange={(e) => setDob(e.target.value)}
                className={`input-field placeholder:text-[#CD9564] ${isDobFocused ||DOB? 'focus:border-black outline-none py-1 px-2 border-b border-gray-500' : ''}`}
                type="text"
                onFocus={handleDobFocus}
                onBlur={handleDobBlur}
              />
              <label className={` ${isDobFocused || DOB? 'text-white' : 'text-pry'} transition-all duration-300 ${isDobFocused ? '-translate-y-2 text-sm' : 'translate-y-2 text-base'}`}>DOB</label>
            </div>
            </div>
            <div>
            <button type='submit' disabled= {loading} className="mb-[0.5em] mt-2 disabled:bg-sec text-pry bg-[#171717] rounded border-none hover:text-white hover:bg-pry p-[0.5rem] px-6 transition-all ease-in-out duration-500">Sign Up</button>
            </div>
          </div>
          
          <p to={"/signup"} className="group text-pry ">
            Already have an account?{" "}
            <Link to={"/login"} className=" group-hover:underline">
              Login
            </Link>
          </p>
          <button className="button3">Sign Up With Google</button>
          <p className="text-red-500">{errors && errors}</p>
          {loading && (
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <Loader />
            </div>
          )}
        </form>
      </div>
      <Loader />
      {
        successful && <RegistrationSuccesful/>
      }
    </div>
  );
};

export default SignUp;



