import React from 'react';
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from './img/work.svg';
import { ReactComponent as SchoolIcon } from './img/school.svg';

const timeline = () => {
	let workIconStyles = { background: '#06d6a0' };
	let schoolIconStyles = { background: '#f9c74f' };

	let timelineElements = [
		{
			id: 1,
			title: 'Product Design Degree',
			location: 'Southampton Solent University',
			description: 'Bachelors of Art, Design & Fashion with Second Class Honours',
			buttonText: 'View projects',
			date: 'September 2016 - May 2020',
			icon: 'school'
		},
		{
			id: 2,
			title: 'Udemy Online Courses',
			location: 'Islington, London',
			description: 'UX/UI Design Theory & Essentials for Adobe XD',
			date: 'September 2020 - Current',
			icon: 'work'
		},
		{
			id: 3,
			title: 'Tech Hardware Warehouse Job',
			location: 'Islington, London',
			description: 'I begin my part-time employment within a warehouse-based role packing technological hardware',
			date: 'November 2020 - May 2022',
			icon: 'work'
		},
		{
			id: 4,
			title: 'Personal UX Design Projects',
			location: 'Islington, London',
			description: 'Identified my own personal projects and applied my knowledge obtained through university & online courses.',
			date: 'March 2021 - Current',
			icon: 'work'
		},
		{
			id: 5,
			title: 'General Assembly',
			location: 'Witechapel, London',
			description: 'Attended various talks and meetups to gain inside knowledge about the industry and networking with other designers.',
			date: 'January - February 2020',
			icon: 'work'
		},
		{
			id: 6,
			title: 'Studied Adobe XD and Figma',
			location: 'Islington, London',
			description: 'These programmes are essential for this industry to become proficient',
			date: 'May 2021 - January 2022',
			icon: 'work'
		},
		{
			id: 8,
			title: 'Bar staff',
			location: 'London',
			description: 'Worked various bars and events around the UK',
			date: 'June 2020 - Current',
			icon: 'work'
		}
	];

	return (
		<div id='timeline' className='Timeline'>
			<h1 className='timelineTitle'>Timeline</h1>
			<VerticalTimeline>
				{timelineElements.map(el => {
					return (
						<VerticalTimelineElement
							key={el.id}
							date={el.date}
							dateClassName='date'
							iconStyle={el.icon === 'work' ? workIconStyles : schoolIconStyles}
							icon={el.icon === 'work' ? <WorkIcon /> : <SchoolIcon />}
						>
							<h3 className='vertical-timeline-element-title'>{el.title}</h3>
							<h5 className='vertical-timeline-element-subtitle'>{el.location}</h5>
							<p id='description'>{el.description}</p>
							{el.buttonText && (
								<a className={`button ${el.icon === 'work' ? 'workButton' : 'schoolButton'}`} href='/'>
									{el.buttonText}
								</a>
							)}
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default timeline;
