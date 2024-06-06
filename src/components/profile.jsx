import React, { useState } from 'react';
import Modal from "./modal";
import Login from './login';

function Profile() {
    const [userVisible] = useState(false)
    const [open, setOpen] = useState(false);

    // const handleVisible = () => {
    //     setUserVisible(true);
    // };

    return (
        <>
            {userVisible ?
                <div classame="profile"></div>
                :
                <a href="/login" className="nav-link" onClick={(e) => setOpen(true)}>Login/Signup</a>
            }
            <Modal isOpen={open} onClose={(e) => setOpen(false)}>
                <Login />
            </Modal>
        </>
    );
};

export default Profile;