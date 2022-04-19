import React from 'react';
import './DetectForm.css';

const DetectForm = ({inputChange, onButtonSubmit}) => {
    return(
        <div className="detectForm mt4">
            <input onChange={inputChange} type="text" className="h2 b--black w5 ba br3"/>
            <button onClick={onButtonSubmit} className="f4 grow black pointer fw9 b--black pv2 br2 ml2 ba bgGreen">Detect</button>
        </div>
    );
};

export default DetectForm;
