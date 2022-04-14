import React from 'react';
import './Logo.css';
import logo from './Logo1.png'

const Logo = () => {
    return(
        <div className="logoDiv shadow-4 ba b--black br4 grow ph3">
            <img src={logo} alt="Logo" />
            <p className="f3">Face Detection</p>
        </div>
    );
};

export default Logo;
