import { IoMenuSharp } from 'react-icons/io5';
import { useRef } from 'react';
import { gsap } from 'gsap';

const AwesomeMenu = () => {
	const menu = useRef(null);

	// Function to open the menu
	const openMenu = () => {
		gsap.to(menu.current, {
			width: '100%',
			height: '100vh',
			duration: 0.5,
		});
	};

	// Function to close the menu
	const closeMenu = () => {
		gsap.to(menu.current, { width: '8vw', height: '6vh', duration: 0.5 });
	};

	// Toggle menu open/close
	const toggleMenu = () => {
		const isOpen = menu.current.style.width === '100%';
		if (isOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	return (
		<>
			<nav className='max-w-[1200px] m-auto flex justify-between'>
				<h1>Logo</h1>
				<div
					ref={menu}
					className='flex items-center gap-2 bg-slate-200 w-[8vw] h-[6vh] cursor-pointer menu fixed'
					onClick={toggleMenu}>
					<IoMenuSharp />
					<h4>Menu</h4>
				</div>
			</nav>
		</>
	);
};

export default AwesomeMenu;
