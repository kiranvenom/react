import React from 'react';

const WeatherInfo = ({ temperature }) => {
	// Your conditional rendering logic goes here
	let message;
	if (temperature < 10) {
		message = 'its cold';
	} else if (temperature <= 25) {
		message = 'its moderate';
	} else {
		message = 'hot';
	}
	return (
		<div>
			{/* Display weather information based on temperature */}
			<p>{message}</p>
		</div>
	);
};

export default WeatherInfo;
