import React from 'react';
import CardItem from '../CardItem/CardItem';
import './Cards.css';
import artistPage from '../../images/Artist-page-mockup.png';
import waste from '../../images/waste.png';
import chatapp from '../../images/Web-page-mockup.png';

function Cards() {
	return (
		<div className='cards' id='cards'>
			<h1>Latest Projects</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src={artistPage}
							path='https://design-my-burger.netlify.app/'
							label='Figma'
							title='Music App'
							text='Dummy text test2123'
							github='https://github.com/JakeLambertWD/design-my-burger'
						/>
						<CardItem
							src={chatapp}
							path='https://design-my-burger.netlify.app/'
							label='Figma'
							title='Instant Chat App'
							text='Dynamic burger equest and response.'
							github='https://github.com/JakeLambertWD/design-my-burger'
						/>
						<CardItem
							src={waste}
							path='https://forkify-jake.netlify.app/'
							label='Adobe XD'
							title='Clean Izzy'
							text='An app that takes advantage of the MVC design pattern to divide program logic into 3 interconnected elements. Promises to represent the completion (or failure) of asynchronous operations. API calls to retreive data, which gets manipulated and then displayed on the UI.'
							github='https://github.com/JakeLambertWD/forkify'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
