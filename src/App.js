// src/components/App.js

import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import LandingPage from './components/LandingPage'; // Import the LandingPage component
import './App.css'; // Import the CSS file for general styles

const App = () => {
    const [showLandingPage, setShowLandingPage] = useState(true);

    const handleCloseLandingPage = () => {
        setShowLandingPage(false); // Close the landing page
    };

    return (
        <div className="App">
            <Header />
            {showLandingPage && <LandingPage onClose={handleCloseLandingPage} />} {/* Conditionally render LandingPage */}
            <main>
                <AboutMe />
            </main>
        </div>
    );
};

export default App;
