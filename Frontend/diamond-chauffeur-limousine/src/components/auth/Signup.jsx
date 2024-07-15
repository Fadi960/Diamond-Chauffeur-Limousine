import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../images/slide-3.jpg'; // Import background image

const Signup = ({ onSignupSuccess }) => {
    const [userName, setUserName] = useState(''); // State for username input
    const [email, setEmail] = useState(''); // State for email input
    const [confirmEmail, setConfirmEmail] = useState(''); // State for confirm email input
    const [password, setPassword] = useState(''); // State for password input
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password input
    const [error, setError] = useState(''); // State for error messages

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email and confirm email match
        if (email !== confirmEmail) {
            setError('Emails do not match.');
            return;
        }

        // Validate password and confirm password match
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            // Send POST request to create user
            const response = await axios.post('http://localhost:3000/user/createUser', {
                userName: userName,
                email: email,
                password: password
            });

            // Handle successful signup
            console.log('Signup successful:', response.data);
            onSignupSuccess(); // Call the success handler
        } catch (error) {
            // Handle different error types
            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Response error:', error.response.data);
                setError(error.response.data.message || 'Failed to sign up. Please try again.');
            } else if (error.request) {
                // Request was made but no response received
                console.error('Request error:', error.request);
                setError('No response from server. Please try again later.');
            } else {
                // Something happened in setting up the request
                console.error('Error:', error.message);
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
                <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    {/* Username input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Your username"
                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                        />
                    </div>
                    {/* Email input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                        />
                    </div>
                    {/* Confirm email input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmEmail">Confirm Email</label>
                        <input
                            type="email"
                            id="confirmEmail"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            placeholder="Confirm email"
                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                        />
                    </div>
                    {/* Password input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                        />
                    </div>
                    {/* Confirm password input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                        />
                    </div>
                    {/* Display error message if there is any */}
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {/* Submit button */}
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
