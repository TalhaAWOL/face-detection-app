import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'

const Navbar = (props) => {
    return(
        <div className="navbar shadow-4 pv1 bgGreen">
            <Logo />
            {/* <a className="flexEnd f4 dim" href="">Sign Out</a> */}
            {props.children}
        </div>
    );
};

export default Navbar;
