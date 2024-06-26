// LogoutPage.js

import React from 'react';
import './LogoutCart.css';
import LogoutButton from '../../../landingPage/logoutButton/LogoutButton'

const LogoutPage = () => {
    return (
        <div className="logout-container">
            <div className="profile-picture">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User Picture" />
            </div>
            <h1>Goodbye, [User's Name]!</h1>
            <p>We hope to see you again soon!</p>
            <LogoutButton />
        </div>
    );
};

export default LogoutPage;
