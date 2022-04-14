import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'
import NavItem from '../NavItem/NavItem'

const Navbar = () => {
    return(
        <div className="navbar">
            <Logo />
            {/* <a className="flexEnd f4 dim" href="">Sign Out</a> */}
            <NavItem classes={"flexEnd"}/>
        </div>
    );
};

export default Navbar;
