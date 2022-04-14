import React from 'react';
import './Logo.css';
import logo from './Logo1.png'

const Logo = () => {
    return(
        <div className="logoDiv">
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Logo;
