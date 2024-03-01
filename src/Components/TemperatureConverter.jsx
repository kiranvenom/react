import React, { useState } from 'react';

const TemperatureConverter = () => {
	// Your state and event handler logic goes here
	const [celNum, setcelNum] = useState('');
	const [fahNum, setfahNum] = useState('');

	const handleCel = (e) => {
		setcelNum(e.target.value);
	};

	const handleFah = (e) => {
		setfahNum(e.target.value);
	};

	return (
		<div>
			{/* Input fields for Celsius and Fahrenheit */}
			<label htmlFor='celsius'>Celsius:</label>
			<input
				type='number'
				id='celsius'
				onChange={handleCel}
				value={(fahNum - 32) * 0.5556}
				// Add appropriate props to link with state
			/>

			<label htmlFor='fahrenheit'>Fahrenheit:</label>
			<input
				type='number'
				id='fahrenheit'
				onChange={handleFah}
				value={Math.floor(celNum * 1.8 + 32)}
				// Add appropriate props to link with state
			/>
			{/* Button to toggle conversion mode */}
			<button
				onClick={() => {
					/* Add logic to toggle conversion mode */
				}}>
				Toggle Conversion
			</button>
			{/* Display the current conversion mode */}
		</div>
	);
};

export default TemperatureConverter;
