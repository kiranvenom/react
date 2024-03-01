import React, { useState } from 'react';

const TrafficLight = () => {
	const [currentColor, setCurrentColor] = useState('red');

	const changeLight = () => {
		switch (currentColor) {
			case 'red':
				setCurrentColor('green');
				break;
			case 'yellow':
				setCurrentColor('red');
				break;
			case 'green':
				setCurrentColor('yellow');
				break;
			default:
				setCurrentColor('red');
		}
	};

	return (
		<div>
			<div>
				<div
					style={{
						width: '50px',
						height: '50px',
						backgroundColor:
							currentColor === 'red' ? 'red' : 'transparent',
						borderRadius: '50%',
						border: '1px solid #000',
					}}></div>
				<div
					style={{
						width: '50px',
						height: '50px',
						backgroundColor:
							currentColor === 'yellow'
								? 'yellow'
								: 'transparent',
						borderRadius: '50%',
						border: '1px solid #000',
					}}></div>
				<div
					style={{
						width: '50px',
						height: '50px',
						backgroundColor:
							currentColor === 'green' ? 'green' : 'transparent',
						borderRadius: '50%',
						border: '1px solid #000',
					}}></div>
			</div>

			<button onClick={changeLight}>Change Light</button>
		</div>
	);
};

export default TrafficLight;
