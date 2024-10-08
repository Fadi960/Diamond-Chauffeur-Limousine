import React, { useState } from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';

const Index = () => {
    const [view, setView] = useState('login'); // Possible values: 'login', 'forgotPassword', 'signup'

    const handleForgotPasswordClick = () => {
        setView('forgotPassword');
    };

    const handleSignupClick = () => {
        setView('signup');
    };

    const handleSignupSuccess = () => {
        setView('login');
    };

    return (
        <div className="login-container">
            {view === 'login' && <Login onForgotPasswordClick={handleForgotPasswordClick} onSignupClick={handleSignupClick} />}
            {view === 'forgotPassword' && <ForgotPassword />}
            {view === 'signup' && <Signup onSignupSuccess={handleSignupSuccess} />}
        </div>
    );
};

export default Index;
