import React from 'react';
import './Logo.css';
import logo from './Logo1.png'

const Logo = () => {
    return(
        <div className="logoDiv shadow-4 ba br4 grow ph3">
            <img src={logo} alt="Logo" />
            <p className="f3 black">Face Detection</p>
        </div>
    );
};

export default Logo;
