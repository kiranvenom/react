// import React, { useState } from 'react';
// import 'remixicon/fonts/remixicon.css';

// const datas = [
// 	{
// 		question: 'What is Gallaxy 🌌?',
// 		answer: 'A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems, all held together by gravity.',
// 	},
// 	{
// 		question: 'What Is an Asteroid 🥌?',
// 		answer: 'Asteroids are small, rocky objects that orbit the Sun. Although asteroids orbit the Sun like planets, they are much smaller than planets.',
// 	},
// 	{
// 		question: 'What are sunspots ☀?',
// 		answer: 'Sunspots are areas that appear dark on the surface of the Sun. They appear dark because they are cooler than other parts of the Suns surface. Solar flares are a sudden explosion of energy caused by tangling, crossing or reorganizing of magnetic field lines near sunspots..',
// 	},
// ];

// const Accordion = () => {
// 	const [open, setOpen] = useState(true);

// 	const handleopen = (idx) => {
// 		setOpen(false);
// 	};

// 	return (
// 		<>
// 			<div className='accordian'>
// 				{datas.map((data, idx) => {
// 					return (
// 						<>
// 							<div className='acc-items'>
// 								<div
// 									onClick={() => handleopen(idx)}
// 									className='ques'>
// 									<h4>{data.question}</h4>
// 								</div>
// 								<div className={open ? 'ans' : 'ans open'}>
// 									<h4>{data.answer}</h4>
// 								</div>
// 							</div>
// 						</>
// 					);
// 				})}
// 			</div>
// 		</>
// 	);
// };

// export default Accordion;

import React, { useState } from 'react';
// import 'remixicon/fonts/remixicon.css';

const datas = [
	{
		question: 'What is Gallaxy 🌌?',
		answer: 'A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems, all held together by gravity.',
	},
	{
		question: 'What Is an Asteroid 🥌?',
		answer: 'Asteroids are small, rocky objects that orbit the Sun. Although asteroids orbit the Sun like planets, they are much smaller than planets.',
	},
	{
		question: 'What are sunspots ☀?',
		answer: 'Sunspots are areas that appear dark on the surface of the Sun. They appear dark because they are cooler than other parts of the Suns surface. Solar flares are a sudden explosion of energy caused by tangling, crossing or reorganizing of magnetic field lines near sunspots..',
	},
];

const Accordion = () => {
	const [openItems, setOpenItems] = useState(Array(datas.length).fill(false));

	const handleOpen = (idx) => {
		const newOpenItems = [...openItems];
		newOpenItems[idx] = !newOpenItems[idx];
		setOpenItems(newOpenItems);
	};

	return (
		<>
			<div className='accordian'>
				{datas.map((data, idx) => (
					<div className='acc-items' key={idx}>
						<div onClick={() => handleOpen(idx)} className='ques'>
							<h4>{data.question}</h4>
						</div>
						<div className={openItems[idx] ? 'ans open' : 'ans'}>
							<h4>{data.answer}</h4>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Accordion;
