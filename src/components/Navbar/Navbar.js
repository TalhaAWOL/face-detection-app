import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'
import NavItem from '../NavItem/NavItem'

const Navbar = () => {
    return(
        <div className="navbar shadow-5 pv2">
            <Logo />
            {/* <a className="flexEnd f4 dim" href="">Sign Out</a> */}
            <NavItem classes={"flexEnd black shadow-5 pv2 ph3 ba br3 dim"}/>
        </div>
    );
};

export default Navbar;
