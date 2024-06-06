import React, { useState } from 'react';
import LoginModal from './login-modal'; // Import LoginModal component

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const openLoginModal = () => setIsLoginModalOpen(true);

    return (
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
            <div className="container">
                <div className="logo">
                    {/* Add your logo here */}
                    <h1>Ray Inc.</h1>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}> {/* Hide menu items unless open */}
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Packages</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
                <li className="nav-item-right">
                    <button onClick={openLoginModal}>Login/Signup</button>
                </li>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />} {/* Conditionally render LoginModal */}
        </nav>
    );
};

export default Navbar;