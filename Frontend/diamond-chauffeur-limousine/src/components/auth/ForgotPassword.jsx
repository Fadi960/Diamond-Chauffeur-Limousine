import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import backgroundImage from '../../images/slide-2.jpg';
import axios from 'axios';

const ForgotPassword = ({ }) => {
    const [submitted, setSubmitted] = useState(false); // State to track if form has been submitted
    const [error, setError] = useState(''); // State to store error messages

    // Formik initial values
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    // Form validation schema using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .required('New Password is required')
            .min(8, 'Password must be at least 8 characters long'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        const { email, password } = values;

        try {
            // API call to reset password
            const response = await axios.patch('http://localhost:3000/auth/resetPassword', { email, password});
            console.log('Password reset successful:', response.data);

            // Simulate success
            setSubmitted(true);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to reset password. Please try again.');
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    // Effect to redirect after successful submission
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                window.location.href = '/auth'; // Redirect to login page after successful reset
            }, 2000); // Redirect after 2 seconds

            return () => clearTimeout(timer); // Cleanup function
        }
    }, [submitted]); // Dependency on submitted state

    return (
        <>
            {submitted ? (
                // Render a message when password reset is successful and redirecting
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-2xl text-gray-800">Password reset successful! Redirecting...</p>
                </div>
            ) : (
                // Render the forgot password form
                <div
                    className="min-h-screen flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
                        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Forgot Password</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    {/* Display error message if there is any */}
                                    {error && <p className="text-red-500 mb-4">{error}</p>}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                            Enter your email
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Your email"
                                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                            New Password
                                        </label>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="New Password"
                                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                            Confirm Password
                                        </label>
                                        <Field
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            className="appearance-none bg-transparent border border-gray-300 w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-yellow-600"
                                        />
                                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            type="submit"
                                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    );
};

export default ForgotPassword;
