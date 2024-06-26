import useAuth from '../../form/Authentication/useAuth';
import { useState } from 'react';
import './LogoutButton.css';

const LogoutButton = () => {
    const { auth, setAuth } = useAuth();
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };

    const handleLogout = () => {
        setShowModal(false);
    };

    return (
        <div className="logout-modal">
            <a href='#' onClick={showModalHandler}>Logout</a>

            {showModal && (
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Are you sure you want to logout?</h2>
                        </div>
                        <div className="modal-buttons">
                            <button className="cancel" onClick={handleLogout}>
                                Cancel
                            </button>
                            <button className="logout" onClick={() => {setAuth({})}}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LogoutButton;
