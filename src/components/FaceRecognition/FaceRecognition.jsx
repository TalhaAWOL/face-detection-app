import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boundingBoxParams}) => {
    return(
        <div className="faceRecognition absolute center">
            <img id="faceImage" src={imageUrl} alt=""/>
            <div className="boundingBox" style={{top: boundingBoxParams.topRow, right:boundingBoxParams.rightCol, bottom: boundingBoxParams.botRow, left: boundingBoxParams.leftCol}}></div>
        </div>
    );
};

export default FaceRecognition;
