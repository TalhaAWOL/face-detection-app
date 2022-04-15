import React from 'react';
import './DetectForm.css';

const DetectForm = () => {
    return(
        <div className="detectForm br2">
            <input type="text" className="h2 w5 ba br3"/>
            <button className="f3 dim black ba br4 ml2 pa1 ba">Detect</button>
        </div>
    );
};

export default DetectForm;
