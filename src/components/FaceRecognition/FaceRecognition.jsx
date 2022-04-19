import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className="faceRecognition ma">
            <div className='mt2 absolute'>
             <img src={imageUrl} alt="" width="8rem" height="auto"/>
            </div>
        </div>
    );
};

export default FaceRecognition;
