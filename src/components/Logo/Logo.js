import React from 'react';
import './Logo.css';
import logo from './Logo1.png'
import Tilt from 'react-vanilla-tilt'

const Logo = () => {
    return(
        <Tilt options={{ scale: 2, max: 25, glare: true, "max-glare": 1}} style={{bacgroundColor:"black"}}>
            <div className="logoDiv grow shadow-4 ba br4 ph3">
                <img className="logo" src={logo} alt="Logo" />
                <p className="f3 greenText">Face Detection</p>
            </div>
        </Tilt>
    );
};

export default Logo;
