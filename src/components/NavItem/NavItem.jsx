import React from 'react';
import './NavItem.css';

const NavItem = ({classes, onRouteChange}) => {
    return(
        <div className={`navItem ${classes}`}>
            <a onClick={() => onRouteChange('signin')} className="f4 greenText" href="">Sign Out</a>
        </div>
    );
};

export default NavItem;
