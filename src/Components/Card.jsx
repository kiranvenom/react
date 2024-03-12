import { useEffect, useState } from 'react';

const Card = () => {
	let interval;
	const [num, setNum] = useState(0);

	const handleNumber = () => {
		// Start the interval only if it's not already running and num is less than 20
		if (num < 20) {
			interval = setInterval(() => {
				setNum((prevNum) => prevNum + 1);
			}, 200);
			// Clear interval when num reaches 20
			setTimeout(() => {
				clearInterval(interval);
			}, (20 - num) * 200);
		}
	};

	useEffect(() => {
		// Cleanup function to clear the interval when component unmounts
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			onMouseEnter={handleNumber}
			className='bg-red-100 w-[30vw] h-[40vh] m-2 flex justify-center items-center'>
			<h1 className='text-5xl font-bold'>{num}</h1>
		</div>
	);
};

export default Card;
