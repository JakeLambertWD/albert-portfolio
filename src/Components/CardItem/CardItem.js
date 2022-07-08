import React from 'react';
import { ExternalLink } from 'react-external-link';
import { GoMarkGithub } from 'react-icons/go';
import { VscLinkExternal } from 'react-icons/vsc';

function CardItem(props) {
	// github checker
	const github = () => {
		return (
			<div className='iconLinks'>
				<a href={props.github} target='_blank'>
					<GoMarkGithub size='20px' />
					<p>GitHub</p>
				</a>
				<a href={props.path} target='_blank'>
					<VscLinkExternal size='20px' />
					<p>Visit Site</p>
				</a>
			</div>
		);
	};

	return (
		<>
			<li className='cards__item'>
				<ExternalLink className='cards__item__link' href={props.path}>
					<figure className='cards__item__pic-wrap' data-category={props.label}>
						<img
							src={props.src}
							alt='Travel Image'
							className='cards__item__img'
						/>
					</figure>
					<div className='cards__item__info'>
						<h7>{props.title}</h7>
						<p className='cards__item__text'>{props.text}</p>
						{props.github ? github() : ''}
					</div>
				</ExternalLink>
			</li>
		</>
	);
}

export default CardItem;
