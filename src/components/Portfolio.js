import React, { forwardRef } from "react";
import Button from 'react-bootstrap/Button';
import budgetapp from '../images/proj-budgetapp.png';
import spacex from '../images/proj-spacex.jpg';
import leaderboard from '../images/proj-leaderboard.png';
import mathmagicians from '../images/proj-mathmagicians.png';
// import Snapshoot_Portfolio_desktop_3 from '../images/Snapshoot_Portfolio_desktop_3.png';
const Portfolio = () => {
	const projects = [
		{
		  name: 'Budgetapp',
		  featuredImage: { link: budgetapp, alt: 'Budgetapp project image' },
		  description: 'Allows users manage their budget. Users can have a list of transactions associated with a category, so that they can see how much money they spent and on what; signup required.',
		  languagesList: ['html', 'Ruby on rails', 'css', 'javascript'],
		  liveLink: 'https://limitless-waters-86087.herokuapp.com/',
		  sourceLink: 'https://github.com/Fikerte-T/budget-app',
		},
		{
		  name: 'SpaceX-Hub',
		  featuredImage: { link: spacex, alt: 'SpaceX-Hub project image' },
		  description: 'A web app that provides commercial and scientific space travel services; uses data from SpaceX API',
		  languagesList: ['html', 'css', 'javascript', 'React', 'Redux'],
		  liveLink: 'https://spaces-hub-app.herokuapp.com/',
		  sourceLink: 'https://github.com/Fikerte-T/SpaceX-Hub',
		},
		{
		  name: 'Leaderboard',
		  featuredImage: { link: leaderboard, alt: 'Leaderboard project image' },
		  description: 'Users can submit their scores to the external Leaderboard API and all users\' data can be received from the API and to be displayed on the website.',
		  languagesList: ['html', 'css', 'javascript'],
		  sourceLink: 'https://github.com/Fikerte-T/Leaderboard-2',
		},
		{
		  name: 'Math Magicians',
		  featuredImage: { link: mathmagicians, alt: 'Math magicians project image' },
		  description: 'A single page application created with react. It uses components to display the UI and to implement the math logic',
		  languagesList: ['html', 'css', 'javascript', 'React'],
		  liveLink: 'https://reactapp-math-magicians.herokuapp.com/',
		  sourceLink: 'https://github.com/Fikerte-T/math-magicians',
		},
	  ];

	  const handleClick = (link) => {
		window.open(link, '_blank')
	  }

	  return (
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
				{projects.map((project, index) => (
						<div key={index} className = {index%2!==0 ? 'card row-reverse' : 'card' }>
						<img src= {project.featuredImage.link} alt={project.featuredImage.alt} className="card-image card-block"/>
						<div className="card-text card-block">
							<h2 className="heading-2">{project.name}</h2>
							<p className="paragraph">{project.description}</p>
							<ul>
								{project.languagesList.map((language) => (
									<li>{language}</li>
								))}
							</ul>
							<Button variant="primary" onClick={() => handleClick(project.sourceLink)}>See Project</Button>{' '}
						</div>
					</div>
				))}
			</div>
	</>
);
};

export default forwardRef(Portfolio);