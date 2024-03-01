import React, { useState } from 'react';

const CounterApp = () => {
	const [count, setcount] = useState(0);

	let color;
	if (count > 0) {
		color = 'green';
	} else if (count < 0) {
		color = 'red';
	} else {
		color = 'black';
	}

	return (
		<>
			<p style={{ fontWeight: 900, fontSize: '2.4rem', color }}>
				Counter: {count}
			</p>

			<button
				onClick={() => {
					setcount(count + 1);
				}}>
				Increment
			</button>
			<button
				onClick={() => {
					setcount(count - 1);
				}}>
				Decrement
			</button>
			<button
				onClick={() => {
					setcount(0);
				}}>
				Reset
			</button>
		</>
	);
};

export default CounterApp;
