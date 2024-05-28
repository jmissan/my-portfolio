// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Import the CSS file for header styles
import LandingPage from './LandingPage';
import face from '../DSC_0001.JPEG'; // Adjust the path to your image

const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLandingPage, setShowLandingPage] = useState(false);

    const handleSetActive = (to) => {
        setActiveLink(to);
        setMenuOpen(false); // Close the menu when a link is clicked
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLandingPage = () => {
        setShowLandingPage(!showLandingPage);
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title" onClick={toggleLandingPage}>
                    Hi! I'm Joey
                </h1>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="me"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleSetActive('me')}
                                className={activeLink === 'me' ? 'active' : ''}
                            >
                                Intro
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="bio"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleSetActive('bio')}
                                className={activeLink === 'bio' ? 'active' : ''}
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleSetActive('skills')}
                                className={activeLink === 'skills' ? 'active' : ''}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="interests"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleSetActive('interests')}
                                className={activeLink === 'interests' ? 'active' : ''}
                            >
                                Interests
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleSetActive('education')}
                                className={activeLink === 'education' ? 'active' : ''}
                            >
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleSetActive('projects')}
                                className={activeLink === 'projects' ? 'active' : ''}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => handleSetActive('contact')}
                                className={activeLink === 'contact' ? 'active' : ''}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {showLandingPage && <LandingPage onClose={toggleLandingPage} />}
        </header>
    );
};

export default Header;
