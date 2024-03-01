import axios from 'axios';
import { useEffect, useState } from 'react';
import MeaningBody from './MeaningBody';

const Dictionary = () => {
	const [word, setWord] = useState('');
	const [search, setSearch] = useState('');
	const [searchInitiated, setSearchInitiated] = useState(false);
	const [data, setData] = useState('');

	const handleChange = (e) => {
		setWord(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(word);
		setWord('');
		setSearchInitiated(true);
	};

	const getWord = async () => {
		try {
			let { data } = await axios.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
			);
			setData(data[0]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (searchInitiated) {
			getWord();
			setSearchInitiated(false);
		}
	}, [search, searchInitiated]);

	return (
		<>
			<div className='w-full'>
				<header className='bg-[#00A886] text-center py-6 font-bold text-white text-2xl'>
					Word Dictionary
				</header>

				<div className='bg-blue-500 h-[10rem] dicImage flex justify-center items-center'>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							id='name'
							className='bg-white rounded-full p-4'
							placeholder='Enter word'
							onChange={handleChange}
							value={word}
						/>
					</form>
				</div>
				<MeaningBody data={data} />
			</div>
		</>
	);
};

export default Dictionary;
