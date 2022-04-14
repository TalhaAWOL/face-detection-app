import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'

const Navbar = () => {
    return(
        <div className="navbar">
            <Logo />
            <a className="flexEnd" href="">Sign Out</a>
        </div>
    );
};

export default Navbar;
