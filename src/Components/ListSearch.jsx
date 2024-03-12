import React, { useState } from 'react';

const ListSearch = () => {
	const [search, setSearch] = useState('');

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const fruits = ['apple', 'mango', 'pineapple', 'peach'];
	const filteredFruits = fruits.filter((fruit) =>
		fruit.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<>
			<div className='w-full h-screen bg-blue-100 flex justify-center items-center flex-col'>
				<input
					className='p-4 rounded-md'
					type='text'
					placeholder='search item'
					onChange={handleSearch}
				/>
				<ul className='mt-6 text-center font-bold text-2xl'>
					{filteredFruits.map((fruit, index) => (
						<li key={index}>{fruit}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ListSearch;
