// import { Input } from '@/components/ui/input';
// import { useState } from 'react';

// const StopWatch = () => {
// 	const [value, setvalue] = useState(0);
// 	const [time, settime] = useState('');
// 	const [sec, setSec] = useState(0); //raw seconds

// 	const handleChange = (e) => {
// 		settime(e.target.value);
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (time == '' || time == 0) {
// 			return;
// 		} else {
// 			setvalue(time);
// 			setSec(time * 60);
// 		}
// 		settime('');
// 	};

// 	return (
// 		<>
// 			<div className='flex flex-col items-center'>
// 				<form className='flex gap-4' onSubmit={(e) => handleSubmit(e)}>
// 					<Input
// 						className='border border-black'
// 						type='number'
// 						placeholder='set time'
// 						value={time}
// 						onChange={(e) => handleChange(e)}
// 					/>
// 					<button
// 						className='bg-blue-500 text-white px-4 py-1 rounded-md'
// 						type='submit'>
// 						Set
// 					</button>
// 				</form>
// 				{value === 0 ? (
// 					<h1 className='mt-6'>set the timer</h1>
// 				) : (
// 					<h1 className='mt-6 font-semibold text-2xl'>
// 						{value}
// 						{+value === 1 ? ' minute' : ' minutes'}
// 					</h1>
// 				)}

// 				<h1 className='mt-8 font-bold text-8xl'>00:00:00</h1>

// 				<div className='mt-6'>
// 					<button className='bg-blue-500 text-white px-4 py-1 mx-4 rounded-md'>
// 						Start
// 					</button>
// 					<button className='bg-blue-500 text-white px-4 py-1 mx-4 rounded-md'>
// 						pause
// 					</button>
// 					<button className='bg-blue-500 text-white px-4 py-1 mx-4 rounded-md'>
// 						reset
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default StopWatch;

// // import React, { useState, useEffect } from 'react';

// // const StopWatch = () => {
// // 	const [seconds, setSeconds] = useState(0);
// // 	const [isActive, setIsActive] = useState(false);

// // 	useEffect(() => {
// // 		let interval = null;

// // 		if (isActive) {
// // 			interval = setInterval(() => {
// // 				setSeconds((seconds) => seconds + 1);
// // 			}, 1000);
// // 		} else if (!isActive && seconds !== 0) {
// // 			clearInterval(interval);
// // 		}

// // 		return () => clearInterval(interval);
// // 	}, [isActive, seconds]);

// // 	const toggleTimer = () => {
// // 		setIsActive(!isActive);
// // 	};

// // 	const resetTimer = () => {
// // 		setSeconds(0);
// // 		setIsActive(false);
// // 	};

// // 	return (
// // 		<div>
// // 			<h1>{seconds} seconds</h1>
// // 			<button onClick={toggleTimer}>
// // 				{isActive ? 'Pause' : 'Start'}
// // 			</button>
// // 			<button onClick={resetTimer}>Reset</button>
// // 		</div>
// // 	);
// // };

// // export default StopWatch;
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';

const StopWatch = () => {
	const [value, setValue] = useState(0);
	const [time, setTime] = useState('');
	const [sec, setSec] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const handleChange = (e) => {
		setTime(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (time === '' || time === 0) {
			return;
		} else {
			setValue(time);
			setSec(time * 60);
		}
		setTime('');
	};

	useEffect(() => {
		let interval = null;

		if (isActive && sec > 0) {
			interval = setInterval(() => {
				setSec(sec - 1);
			}, 1000);
		} else if (!isActive && sec !== 0) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isActive, sec]);

	const toggleTimer = () => {
		setIsActive(!isActive);
	};

	const resetTimer = () => {
		setSec(0);
		setIsActive(false);
		setValue(0);
		setTime('');
	};

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${
			remainingSeconds < 10 ? '0' : ''
		}${remainingSeconds}`;
	};

	return (
		<div className='flex flex-col items-center'>
			<form className='flex gap-4' onSubmit={(e) => handleSubmit(e)}>
				<Input
					className='border border-black'
					type='number'
					placeholder='Set Timer'
					value={time}
					onChange={(e) => handleChange(e)}
				/>
				<button
					className='bg-blue-500 text-white px-4 py-1 rounded-md'
					type='submit'>
					Set
				</button>
			</form>
			{value === 0 ? (
				<h1 className='mt-6'>set the timer</h1>
			) : (
				<h1 className='mt-6 font-semibold text-2xl'>
					{value}
					{+value === 1 ? ' minute' : ' minutes'}
				</h1>
			)}

			<h1 className='mt-8 font-bold text-8xl'>{formatTime(sec)}</h1>

			<div className='mt-6'>
				<button
					className='bg-blue-500 text-white px-4 py-1 mx-4 rounded-md'
					onClick={toggleTimer}>
					{isActive ? 'Pause' : 'Start'}
				</button>
				<button
					className='bg-blue-500 text-white px-4 py-1 mx-4 rounded-md'
					onClick={resetTimer}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default StopWatch;
