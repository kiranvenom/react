import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		// console.log('Mouse move', e.clientX, e.clientY);
		setCursorPosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const cursorStyle = {
		left: `${cursorPosition.x}px`,
		top: `${cursorPosition.y}px`,
	};

	return (
		<>
			<div className='cursor' style={cursorStyle}></div>
		</>
	);
};

export default CustomCursor;
