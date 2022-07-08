import React from 'react';
import profile from './images/Profile.jpeg';
import './About.css';

const About = () => {
	return (
		<>
			<div className='main__selector' id='about'>
				<div className='main__container'>
					<h1>ABOUT ME</h1>
					<div className='main__content'>
						<div className='main__text'>
							<h2>Find out all about me.</h2>
							<p>An aspiring UX designer with an inquisitive mind for all things creative. Based in Islington, London.</p>
							<p>
								Majority of my time consists of identifying and then implementing my skills in order to build personal projects to their upmost
								potential utilising my all or nothing approach.
							</p>
							<p>
								In an industry full of innovation and evolution, adapting is essential. Hence my ability to use programmes such as Adobe XD, Figma and
								Webflow.
							</p>
							<p>
								Having graduated from Southampton Solent University with Second-Class Honours in Product Design, my main goal has been to transition
								along with the increasingly growing demand for digital innovation into a UX designer. Taking the positives, similarities and flaws
								throughout my journey to set me apart from the rest.
							</p>
						</div>
						<div className='main__image'>
							<img src={profile} alt='Me' class='main__img' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
