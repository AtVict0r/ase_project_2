import React, { useState } from 'react';
import Profile from './profile';
import logo from "../assets/logo/ray-inc-logo.jpeg"
import icon from "../assets/icon/hamburger-menu-svgrepo-com.svg"

function Header() {
    const [navVisible, setNavVisible] = useState(false)

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="a logo of a sun" />
                <h1>Ray Inc.</h1>
            </a>
            <nav className="nav" style={{ visibility: navVisible? 'visible' : 'hidden' }}>
                <a href="#featured-section" className="nav-link">Shop</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
            </nav>
            <div className="nav-items">
                <Profile />
                <img id="nav-icon" src={icon} onClick={() => setNavVisible(!navVisible)} alt="burger menu" />
            </div>
        </header>
    );
};

export default Header;