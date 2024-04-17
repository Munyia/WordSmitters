import React, { useState } from "react";
import "./login.css";
import { tb, llogo, lock, eye } from "../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import RegistrationSuccesful from "../components/RegistrationSuccessful";
import api from "../utils/api";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  document.title= "Sign Up"
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password);
    try {
      const response = await api.post('users', {firstname, lastname, username, gender, DOB, email, password})
      console.log(response)
      setLoading(false); // Toggle loading state off after successful request
    } catch (error) {
      console.log(error);
      setLoading(false); // Toggle loading state off after request error
      setErrors(error.response.data);
      
    }
   
  }

  return (
    <div
      className=" w-full placeholder:text-[#CD9564] bg-[rgba(10,32,8,0.9)] h-[100vh] overflow-hidden"
      id="Login"
    >
      <img
        src={tb}
        className="w-full  justify-center text-center align-middle"
        alt=""
      />
      <div className="absolute w-full h-full overflow-hidden bg-[rgba(0,0,0,0.7)] flex justify-center items-center top-0 ">
        <Link to={"/"}>
          <img src={llogo} className="h-[10vh] absolute top-0 left-0" alt="" />
        </Link>
        <form
          onSubmit={handleSubmit}
          
          class="form backdrop-blur-sm bg-[rgba(0,0,0,0.3)]"
        >
          <h1 id="heading" className=" text-2xl font-bold text-[#CD9564] ">
            Sign Up
          </h1>
          <div className="w-full flex flex-col gap-2">
            <div className="field">
              <input
                autocomplete="off"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="input-field placeholder:text-[#CD9564]"
                type="text"
              />
            </div>
            <div className="field">
              <input
                autocomplete="off"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="input-field placeholder:text-[#CD9564]"
                type="text"
              />
            </div>
            <div className="field">
              <input
                autocomplete="off"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field placeholder:text-[#CD9564]"
                type="text"
              />
            </div>
            <div className="field">
              <input
                autocomplete="off"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field placeholder:text-[#CD9564]"
                type="text"
              />
            </div>
            <div className="field">
              <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field placeholder:text-[#CD9564]"
                type={showPassword ? "text" : "password"} // Show password if showPassword is true, otherwise hide it
              />
              <img
                c
                src={showPassword ? eye : lock} // Display different images based on the showPassword state
                alt="Password toggle"
                onClick={togglePasswordVisibility}
                className="password-toggle-icon w-[7%]"
              />
            </div>
            <div className="field">
              <input
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input-field placeholder:text-[#CD9564] "
                type="text"
              />
            </div>
            <div className="field">
              <input
                placeholder="DD/MM/YY"
                value={DOB}
                onChange={(e) => setDob(e.target.value)}
                className="input-field placeholder:text-[#CD9564] "
                type="text"
              />
            </div>
            <div>

            <button type='submit' disabled= {loading} className="mb-[2em] disabled:bg-sec text-pry bg-[#171717] rounded border-none hover:text-white hover:bg-pry p-[0.5rem] px-6 transition-all ease-in-out duration-500">Sign Up</button>
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
