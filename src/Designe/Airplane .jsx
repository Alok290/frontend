import React, { useEffect } from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import './Airplane.css'; // Ensure you have this CSS file

const Airplane = () => {
    useEffect(() => {
        // Set the animation when the component mounts
        const airplane = document.getElementById('airplane-icon');
        airplane.classList.add('fly');
    }, []);

    return (
        <AirplanemodeActiveIcon
            id="airplane-icon"
            style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                fontSize: '70px', // Adjust the size as needed
                color: 'blue', // Adjust the color as needed
                transform: 'rotate(60deg)', // Rotate 60 degrees to the right
            }}
        />
    );
};

export default Airplane;
