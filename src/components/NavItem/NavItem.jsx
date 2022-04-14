import React from 'react';
import './NavItem.css';

const NavItem = ({classes}) => {
    return(
        <div className={`navItem ba br3 dim pa1 ${classes}`}>
            <a className="f4" href="">Sign Out</a>
        </div>
    );
};

export default NavItem;
