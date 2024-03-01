import React, { useState } from 'react';

const Button = ({ type, text, onClick, theme }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setIsActive(false);
	};

	const handleMouseDown = () => {
		setIsActive(true);
	};

	const handleMouseUp = () => {
		setIsActive(false);
	};

	const buttonStyle = {
		backgroundColor: theme[type].default,
		padding: '0.6rem 1.4rem',
		border: 'none',
		borderRadius: '4px',
		cursor: 'pointer',
		transition: 'background-color 0.3s ease',
		...(isHovered && { backgroundColor: theme[type].hover }),
		...(isActive && { backgroundColor: theme[type].active }),
	};

	return (
		<button
			style={buttonStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
