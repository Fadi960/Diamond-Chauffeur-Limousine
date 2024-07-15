import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../avatar/boy.png';

const Profile = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Title and heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Admin Profile</h2>
        </div>
        {/* Profile details */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Avatar */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={avatar}
              alt="Admin Avatar"
            />
          </div>
          {/* Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Fahad Ahmed</h3>
            <p className="text-gray-600">fahadahmed@google.com</p>
            <p className="text-gray-600">Admin</p>
          </div>
        </div>
        {/* Additional profile information */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Profile Information</h4>
          {/* Grid for profile details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700">Full Name</h5>
              <p className="text-gray-600">Fahad Ahmed</p>
            </div>
            {/* Email Address */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700">Email Address</h5>
              <p className="text-gray-600">fahadahmed@google.com</p>
            </div>
            {/* Role */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700">Role</h5>
              <p className="text-gray-600">Admin</p>
            </div>
            {/* Joined */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700">Joined</h5>
              <p className="text-gray-600">Jul 1, 2024</p>
            </div>
          </div>
        </div>
        {/* Security section */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Security</h4>
          {/* Grid for security options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Password */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700">Password</h5>
              <Link to="/auth" className="text-blue-500 hover:underline">Change Password</Link>
            </div>
            {/* Two-Factor Authentication */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-gray-700">Two-Factor Authentication</h5>
              <button className="text-blue-500 hover:underline">Enable</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
