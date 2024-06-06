import React from 'react';
import logo from "../assets/logo/ray-inc-logo.jpeg"

const Navbar = () => {

    return (
        <nav style={{ backgroundColor: '#fce389', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="a logo of a sun" />
                <h1>Ray Inc.</h1>
            </div>
            <div style={{ display: 'flex' }}>
                <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Packages</button>
                    </li>
                    <li>
                        <button>About</button>
                    </li>
                    <li>
                        <button>Contact</button>
                    </li>
                </ul>
                <button>Login/Signup</button>
                <div className="menu-toggle">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;