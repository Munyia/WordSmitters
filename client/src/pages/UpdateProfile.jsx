import React, { useState } from "react";

const UpdateProfile = ({ userDetails, onUpdate }) => {
  const [updatedUserDetails, setUpdatedUserDetails] = useState({ ...userDetails });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedUserDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full justify-center text-center max-w-sm">
      <div className="flex flex-wrap justify-center text-center align-middle -mx-3 mb-6">
        <div className="w-full flex flex-col align-middle  justify-center text-center px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={updatedUserDetails.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={updatedUserDetails.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={updatedUserDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={updatedUserDetails.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={updatedUserDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="bio"
            name="bio"
            placeholder="Bio"
            value={updatedUserDetails.bio}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-pry hover:bg-sec text-sec mb-5 hover:text-white text-center  font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update Details
        </button>
      </div>
    </form>
  );
};

export default UpdateProfile;
