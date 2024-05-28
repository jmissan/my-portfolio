// src/components/LandingPage.js

import React, { useEffect, useState } from 'react';
import './LandingPage.css'; // Import the CSS file for landing page styles
import face from '../DSC_0001.JPEG'; // Adjust the path to your image

const LandingPage = ({ onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Use setTimeout to ensure the fade-in effect after the component mounts
        setTimeout(() => {
            setVisible(true);
        }, 50); // Adjust the delay as needed
    }, []);

    const handleClose = () => {
        setVisible(false); // Immediately hide the landing page
        setTimeout(() => {
            onClose(); // Close the landing page after the fade-out effect
        }, 500); // Adjust the delay to match the transition duration
    };

    return (
        <div className={`landing-page ${visible ? 'fade-in' : 'fade-out'}`}>
            <div className="overlay"></div>
            <div className="content">
                <img src={face} alt="Joey's Picture" className="profile-picture" />
                <h2>Hi! I'm Joey</h2>
                <h2>Welcome to my portfolio!</h2>
                <button className="close-button" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
