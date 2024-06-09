import React, { useState } from 'react';
import Modal from "./modal";
import Profile from './profile';
import ContactForm from './contact';
import About from './about';
import logo from "../assets/logo/ray-inc-logo.jpeg"
import icon from "../assets/icon/hamburger-menu-svgrepo-com.svg"

function Header() {
    const [navVisible, setNavVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false); // state to control Modal visibility
    const [modalContent, setModalContent] = useState(null); // state to control Modal content

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="a logo of a sun" />
                <h1>Ray Inc.</h1>
            </a>
            <nav className="nav" style={{ visibility: navVisible ? 'visible' : 'hidden' }}>
                <a href="#featured-section" className="nav-link">Shop</a>
                <a 
                    href="#about" 
                    className="nav-link"
                    onClick={() => {setModalVisible(true); setModalContent(<About />) }}
                >About</a>
                <a
                    href="#contact"
                    className="nav-link"
                    onClick={() => {setModalVisible(true); setModalContent(<ContactForm />) }}
                >Contact</a>
            </nav>
            <div className="nav-items">
                <Profile />
                <img id="nav-icon" src={icon} onClick={() => setNavVisible(!navVisible)} alt="burger menu" />
            </div>
            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false) }>
                { modalContent }
            </Modal>
        </header>
    );
};

export default Header;