import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FaLock, FaEnvelope } from "react-icons/fa";
import loginImage from "../../images/slide-1.jpg";
import axios from 'axios';

/**
 * Login component for user validation.
 * @param {Function} onForgotPasswordClick - Function to handle forgot password click event.
 * @param {Function} onSignupClick - Function to handle signup click event.
 */

const Login = ({ onForgotPasswordClick, onSignupClick }) => {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
    });

    const handleLoginFormSubmit = (values, { setSubmitting, setErrors }) => {
        axios.post('http://localhost:3000/auth/login', values)
            .then(response => {
                console.log('Login successful:', response.data);
                // Redirect or perform any other action on successful login
                window.location.href = '/';
            })
            .catch(error => {
                console.error('Login error:', error);
                setErrors({ email: 'Invalid login credentials' });
                setSubmitting(false);
            });
    };

    return (
        <div className="min-h-screen flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 bg-cover bg-center hidden sm:block" style={{ backgroundImage: `url(${loginImage})` }}></div>
            <div className="w-full sm:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-gray-100">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">LOGIN</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLoginFormSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1">
                                        <div className="flex items-center border-b border-gray-300 py-2">
                                            <FaEnvelope className="text-gray-400" />
                                            <Field
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="ml-2 appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="mt-1">
                                        <div className="flex items-center border-b border-gray-300 py-2">
                                            <FaLock className="text-gray-400" />
                                            <Field
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                className="ml-2 appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <Link to="/auth" className="text-sm text-yellow-600 hover:text-yellow-800 cursor-pointer" onClick={onForgotPasswordClick}>Forgot Password?</Link>
                                    <Link to="/auth" className="text-sm text-yellow-600 hover:text-yellow-800 cursor-pointer" onClick={onSignupClick}>Sign Up</Link>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
