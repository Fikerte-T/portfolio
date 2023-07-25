import React from "react";
import { Accordion } from "react-bootstrap";
const About = () => (
    <div id="about" className="all-container">
        <div className="about-container">
            <div className="about-text card-text">
                <h2 className="heading-2">About Myself</h2>
                <p className="paragraph">Hello I’m a software developer! I can help you build a product , 
                    feature or website Look through some of my work and experience! 
                    If you like what you see and have a project you need coded, don’t hesitate to contact me.
                </p>
                <div className="header-link">
                    <a className="lets-connect" href="https://www.linkedin.com/in/fikerte-tesfaye/">Let's connect</a>
                </div>
                <a href='https://docs.google.com/document/d/1OOsrvAiM94zisM4JAxgrKK0pifNroL7SLS1b6uLiNkc/edit?usp=sharing' className='btn-link'>Get my resume</a>
            </div>
            <div className="skill-list">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Front-End</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li className="accordion-list">React</li>
                                <li className="accordion-list">Redux</li>
                                <li className="accordion-list">Javascript</li>
                                <li className="accordion-list">HTML</li>
                                <li className="accordion-list">CSS</li>
                                <li className="accordion-list">Figma</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Back-End and Testing</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li className="accordion-list">Ruby on Rails</li>
                                <li className="accordion-list">Ruby</li>
                                <li className="accordion-list">PostgreSQL</li>
                                <li className="accordion-list">RSpec</li>
                                <li className="accordion-list">Jest</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Other Professional Skills</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li className="accordion-list">Git</li>
                                <li className="accordion-list">Github</li>
                                <li className="accordion-list">Heroku</li>
                                <li className="accordion-list">Nelify</li>
                                <li className="accordion-list">Dev Tools</li>
                                <li className="accordion-list">Pair Programming</li>
                                <li className="accordion-list">Team Work</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </div>
)

export default About;