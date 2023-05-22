import React from "react";
import Button from 'react-bootstrap/Button';
// import Snapshoot_Portfolio_desktop_3 from '../images/Snapshoot_Portfolio_desktop_3.png';
const Portfolio = () => (
	<>
		<div className="portfolio-container">
			<div className="header-container">
				<div className="header-text">
					<h1>I'm Fikerte.</h1>
					<h1>Glad to see you!</h1>
					<p>I’m a software developer! I can help you build a product, 
						feature or website Look through some of my work and experience! 
						If you like what you see and have a project you need coded, don’t hestiate to contact me.
					</p>
					<div className="header-link">
						<a className='lets-connect' href="https://www.linkedin.com/in/fikerte-tesfaye/">Let's connect</a>
					</div>
				</div>	
			</div>
		</div>
		<div className="project-cards">
			{/* <img src= {Snapshoot_Portfolio_desktop_3} alt="my-project" className="card-block"/> */}
			<div className="image card-block"></div>
			<div className="card-text card-block">
				<h2 className="heading-2">Project name</h2>
				<p className="paragraph">Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>Ruby on Rails</li>
				</ul>
				<Button variant="primary">See Project</Button>{' '}
			</div>
		</div>
</>
)

export default Portfolio;