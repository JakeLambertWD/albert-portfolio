import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to='cards'
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
					>
						PROJECTS
					</SidebarLink>
					<SidebarLink
						to='about'
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
					>
						ABOUT
					</SidebarLink>
					<SidebarLink
						to='timeline'
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
					>
						TIMELINE
					</SidebarLink>
					<SidebarLink
						to='contact'
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
					>
						CONTACT
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
