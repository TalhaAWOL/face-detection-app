import React from 'react';
import './NavItem.css';

const NavItem = ({classes}) => {
    return(
        <div className={`navItem ${classes}`}>
            <a className="f4 green" href="">Sign Out</a>
        </div>
    );
};

export default NavItem;
