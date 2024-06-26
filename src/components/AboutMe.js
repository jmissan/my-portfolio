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

const AboutMe = () => {
    const [meRef, meInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [interestsRef, interestsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });


    return (
        <div>
            <section ref={meRef} id="me" className={`section me ${meInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Quick Introduction</h2>
                    <div className="me-content">
                        <div className="profile-picture">
                            <img src={col} alt="Profile" />
                        </div>
                        <div className="me-text">
                            <p>Hi! My name's Joey Missan</p>
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
                                <p>I most recently worked as an Automation Software Development Intern at AMD. In this role, I wrote and tested Python automation validation framework scripts for server CPU testing. I worked on various projects ranging from refactoring our codebase to remove 3rd party libraries to converting internal software from one application to another. I gained an abundance of knowledge in the realm of high-performance CPUs and am eager to learn more throughout my time as a full-time employee at AMD.</p>
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
                            <li>HTML5, CSS3, JavaScript</li>
                            <li>React.js, Vue.js</li>
                            <li>Bootstrap, Materialize CSS</li>
                            <li>Git, GitHub, GitLab</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section ref={interestsRef} id="interests" className={`section interests ${interestsInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Interests</h2>
                    <div className="interests-content">
                        <div className="interests-text">
                            <p>Outside of coding, I enjoy hiking, photography, and playing guitar.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={educationRef} id="education" className={`section education ${educationInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Education</h2>
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

        
            <section ref={projectsRef} id="projects" className={`section projects ${projectsInView ? 'fly-in' : ''}`}>
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects-content">
                        <div className="project-list">
                        <ProjectCard
                            title="Project One"
                            description="This is a description of Project One."
                            image="https://via.placeholder.com/200"
                            link="https://example.com/project-one"
                        />
                        <ProjectCard
                            title="Project Two"
                            description="This is a description of Project Two."
                            image="https://via.placeholder.com/200"
                            link="https://example.com/project-two"
                        />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
