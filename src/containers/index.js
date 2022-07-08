import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Cards from '../Components/Cards/Cards';
import About from '../Components/About/About';
import Form from '../Components/Form/Form';
import Timeline from '../Components/Timeline/timeline';

const Home = () => {
	// toggle the sidebar
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<Cards />
			<About />
			<Timeline />
			<Form />
		</>
	);
};

export default Home;
