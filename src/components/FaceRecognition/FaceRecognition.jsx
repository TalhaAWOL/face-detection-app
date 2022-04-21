import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boundingBoxParams}) => {
    const topPcnt = String(boundingBoxParams.topRow * 100) + "%"
    const rightPcnt = String(boundingBoxParams.rightCol * 100) + "%"
    const botPcnt = String(boundingBoxParams.botRow * 100) + "%"
    const leftPcnt = String(boundingBoxParams.leftPcnt * 100) + "%"
    return(
        <div className="faceRecognition mt3 center">
            <div className="boundingBox" style={{top:topPcnt, right:rightPcnt, bottom: botPcnt, left:leftPcnt}}></div>
            <img id="faceImage" src={imageUrl} alt=""/>
        </div>
    );
};

export default FaceRecognition;
