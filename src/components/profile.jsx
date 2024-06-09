import React, { useState } from 'react';
import profilePicture from "../assets/thumbnails/cover-47694373649516986.png"
import Modal from "./modal";
import Login from './login';

function Profile() {
    const [userVisible, setUserVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState(''); // Mock username state

    const handleVisible = () => {
        setUserVisible(true);
    };

    const handleSignOut = () => {
        if (window.confirm('Are you sure you want to sign out?')) {
            // Sign out logic here
            setUsername('');
            setUserVisible(false);
        }
    };

    return (
        <>
            {userVisible && username ?
                <div className="profile" onClick={handleSignOut}>
                    <p>{username}</p>
                    <img src={profilePicture} alt="Profile" />
                </div>
                :
                <a href="#login" className="nav-link" onClick={(e) => setOpen(true)}>Login/Signup</a>
            }
            <Modal isOpen={open} onClose={() => { setOpen(false); handleVisible(); }}>
                <Login 
                    onSignIn={(user) => { setUsername(user); setUserVisible(true); }} 
                    onClose={() => { setOpen(false); handleVisible(); }}
                />
            </Modal>
        </>
    );
};

export default Profile;