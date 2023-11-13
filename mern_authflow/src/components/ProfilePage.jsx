import React, { useState } from "react";

const ProfilePage = () => {
  // Assuming you have a user object with properties like name, email, and picture

  // State for handling form input
  const [password, setPassword] = useState("");

  // Function to handle profile update
  const handleUpdateProfile = () => {
    // Implement your profile update logic here
    console.log("Profile updated!");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <img
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
        src="./najam.jpg" // Replace with the actual URL of the user's profile picture
        alt="Profile"
      />
      <h2 className="text-xl font-semibold mb-2">najam</h2>
      <p className="text-gray-600 mb-4">najamulhassan721@gmailc.om</p>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleUpdateProfile}
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfilePage;
