import { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { BiSolidDislike } from 'react-icons/bi';

const YoutubeLink = () => {
	const [leftNum, setLeftNum] = useState(149);
	const [rightNum, setRightNum] = useState(0);

	const [like, setlike] = useState(true);
	const [dislike, setDislike] = useState(true);

	const handleLikeIcon = () => {
		setlike(!like);

		if (!dislike && like) {
			setDislike(true);
			setRightNum((prev) => prev - 1);
		}
	};

	const handleDisLikeIcon = () => {
		setDislike(!dislike);

		if (dislike && !like) {
			setlike(true);
			setLeftNum((prev) => prev - 1);
		}
	};

	//---------( very Important console.log )--------
	// console.log('like', like);
	// console.log('dislike', dislike);

	//----------( right Num Logic )--------

	const handleLeftNumIncrease = () => {
		setLeftNum((prev) => prev + 1);
	};

	const handleLeftNumDecrement = () => {
		setLeftNum((prev) => prev - 1);
	};

	const handleBothLeftIncrement = () => {
		handleLikeIcon();
		handleLeftNumIncrease();
	};

	const handleBothLeftDecrement = () => {
		handleLikeIcon();
		handleLeftNumDecrement();
	};

	//-----------( right Num Logic )---------

	const handleRightNumIncrease = () => {
		setRightNum((prev) => prev + 1);
	};

	const handleRightNumDecrement = () => {
		setRightNum((prev) => prev - 1);
	};

	const handleBothRightIncrement = () => {
		handleDisLikeIcon();
		handleRightNumIncrease();
	};

	const handleBothRightDecrement = () => {
		handleDisLikeIcon();
		handleRightNumDecrement();
	};

	return (
		<div className='w-full h-screen flex justify-center items-center flex-col select-none'>
			<div className='w-[160px] h-[30px] flex justify-between items-center border border-black p-2 rounded-full'>
				{like ? (
					<BiLike onClick={handleBothLeftIncrement} />
				) : (
					<BiSolidLike onClick={handleBothLeftDecrement} />
				)}
				<div className='w-[0.2px] bg-slate-400 h-full'></div>
				<h1>{leftNum}</h1>
				<div className='w-[4px] h-[4px] bg-slate-400 rounded-full'></div>
				<h1>{rightNum}</h1>
				<div className='w-[0.2px] bg-slate-400 h-full'></div>
				{dislike ? (
					<BiDislike onClick={handleBothRightIncrement} />
				) : (
					<BiSolidDislike onClick={handleBothRightDecrement} />
				)}
			</div>
		</div>
	);
};

export default YoutubeLink;
