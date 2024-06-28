// LogoutPage.js

import React from 'react';
import './LogoutCart.css';
import LogoutButton from '../../../landingPage/logoutButton/LogoutButton'
import {userLogin} from '../allIcon'

const LogoutPage = () => {
    const [toggle, setToggle] = React.useState(false);
    const toggleEditForm = () => {
        setToggle(!toggle);
    };
    
    return (
        <div className="logout-container">
            <div className="profile-picture">
                <img src={userLogin} alt="User Picture" />
            </div>
            <h1>Goodbye, {'John Does'}!</h1>
            <p>We hope to see you again soon!</p>
            <LogoutButton />
        </div>
    );
};

export default LogoutPage;
