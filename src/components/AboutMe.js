// src/components/AboutMe.js

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutMe.css';
import ProjectCard from './ProjectCard';
import gamecock from '../South_Carolina_Gamecocks_logo.svg.png';
import face from '../DSC_0001.JPEG';
import amd from '../amd-symbol.webp';
import jp from '../210909_jp-morgan_logo.jpg';
import exelon from '../Exelon-logo.jpg';
import '../font.css';
import col from '../IMG_1183.JPG';
import mail from '../mail3.webp';
import linkedin from '../linkedinlogo.png';
import github from '../github.webp';
import UT from '../University_of_Texas_at_Austin_seal.svg.png';

const AboutMe = () => {
    const [meRef, meInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [interestsRef, interestsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });


    return (
        <div>
            <section ref={meRef} id="me" className={`section me ${meInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Quick Introduction</h2>
                    <div className="picture-content">
                        <div className="profile-picture">
                            <img src={col} alt="Profile" />
                        </div>
                        <div className="profile-text">
                            <p>Hi! My name's Joey Missan. I am currently a Software Development Engineer 2 at AMD, where I work on back-end software focused with hints of systems design engineering. My typical day consists of creating API endpoints using Java/Spring Boot to ensure the front-end team receives all of the data they need to provide an efficient UX design. I also write task scripts in Python for our company's internal automation software to be utilized by other teams, and I create schema/edit data for our software in SQL on a daily basis. Additionally, I often work with our company's SUT's, or system's-under-test, to validate and automate test cases, and I document projects my team and I have worked on in Confluence for other teams to view as necessary.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={bioRef} id="bio" className={`section bio ${bioInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="bio-content">
                        <div className="bio-item">
                            <div className="bio-image2">
                                <img src={amd} alt="AMD" />
                            </div>
                            <div className="bio-text">
                                <p>Before I began at AMD full-time, I first worked as an Automation Software Development Intern at the company. In this role, I wrote and tested Python automation validation framework scripts for server CPU testing. I worked on various projects ranging from refactoring our codebase to remove 3rd party libraries to converting internal software from one application to another. I gained an abundance of knowledge in the realm of high-performance CPUs and am eager to learn more throughout my time as a full-time employee at AMD.</p>
                            </div>
                        </div>

                        <div className="bio-item">
                            <div className="bio-image">
                                <img src={jp} alt="JP" />
                            </div>
                            <div className="bio-text">
                                <p>Prior to this, I worked as a Software Engineer Intern at JPMorgan Chase & Co. in the Corporate Sector. I worked within the Finance, Risk, Data and Controls team, where we managed company documents and stored those documents in our Cloud via machine learning software. I gained a plethora of experience in the Java programming language as well as application and web frameworks, such as Angular and Spring. I also learned about automation testing with Cucumber and Selenium to traverse our website and discover any fatal flaws. Agile was also utilized on my team to make certain we met our software development goals quickly and efficiently.</p>
                            </div>
                        </div>

                        <div className="bio-item">
                            <div className="bio-image">
                                <img src={exelon} alt="Exelon" />
                            </div>
                            <div className="bio-text">
                                <p>I have also worked as a Protection & Controls Engineering Intern at Exelon, where I mapped I/O sheets of elementary circuit drawings and wrote a few automation scripts using Python and SQL.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section ref={skillsRef} id="skills" className={`section skills ${skillsInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-content">
                        <ul className="skills-text">
                            <li>Python, Java, C/C++, SQL</li>
                            <li>HTML5/CSS3, JavaScript, Django, npm</li>
                            <li>Spring Boot, Cucumber, Selenium</li>
                            <li>SystemVerilog, MATLAB, MIPS/RISC-V</li>
                            <li>Git, GitHub, Shell Scripting, Unix/Linux</li>
                            <li>Oscilloscopes, WaveForms, Soldering Electronics</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section ref={interestsRef} id="interests" className={`section interests ${interestsInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Interests</h2>
                    <div className="interests-content">
                        <div className="interests-text">
                            <p>Outside of coding, I enjoy going to the gym, playing piano/listening to music, watching movies, cooking, traveling, and hanging out with friends. I am always open and willing to try new things! Ever since moving to Austin, I've met awesome people and explored the city (although there is always more to see!), and I am excited to continue my life journey in the live music capital of the world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={educationRef} id="education" className={`section education ${educationInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="education-content">
                        <div className="education-image">
                            <img src={UT} alt="Profile" />
                        </div>
                        <div className="education-text">
                            <h3><b>University of Texas at Austin</b></h3>
                            <p><i><b>Candidate for Master of Science in Computer Science (2027)</b><br />Computer Science, General</i></p>
                        </div>
                    </div>
                    <br />
                    <div className="education-content">
                        <div className="education-image">
                            <img src={gamecock} alt="Profile" />
                        </div>
                        <div className="education-text">
                            <h3><b>University of South Carolina</b></h3>
                            <p><i><b>Bachelor of Science in Engineering (2024)</b><br />Computer Engineering, Electrical Engineering Minor</i></p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={contactRef} id="contact" className={`section contact ${contactInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-content">
                    <div className="contact-links">
                    <a href="mailto:joeymissan@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={mail} alt="Email" />
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-missan-9448171b8/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/jmissan" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" />
                        <span>GitHub</span>
                    </a>
                    </div>
                    </div>
                </div>
            </section>


        
        </div>
    );
};

export default AboutMe;
