import React from 'react';
import './service.css';
import planeImage from '../asset/VectorPlane.png'; // Adjust the path as necessary
import lineImage from '../asset/vectorLine.png'; // Adjust the path as necessary

const Service = () => {
    return (
        <div className="service-container">
            <div className="plane plane1">
                <img src={planeImage} alt="Plane" />
                <img src={lineImage} alt="Line" className="line" />
            </div>
            <div className="plane plane2">
                <img src={planeImage} alt="Plane" />
                <img src={lineImage} alt="Line" className="line" />
            </div>
        </div>
    )
}

export default Service;