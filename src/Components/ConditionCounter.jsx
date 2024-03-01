import { useState } from 'react';

const ConditionCounter = () => {
	const [count, setcount] = useState(0);

	const handlePlus = () => {
		if (count < 10) {
			setcount((prev) => prev + 1);
		} else {
			return;
		}
	};

	const handleMinus = () => {
		if (count > 0) {
			setcount((prev) => prev - 1);
		} else {
			return;
		}
	};

	return (
		<>
			<div className='flex'>
				<button className='font-bold text-5xl' onClick={handlePlus}>
					+
				</button>
				<h1 className='mx-6 font-bold text-5xl cursor-none'>{count}</h1>
				<button className='font-bold text-5xl' onClick={handleMinus}>
					-
				</button>
			</div>
		</>
	);
};

export default ConditionCounter;
