import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WeatherCardCrio from './WeatherCardCrio';

const WeatherCrio = () => {
	const [searchText, setsearchText] = useState('');
	const [search, setSearch] = useState('');

	const [weatherData, setWeatherData] = useState(null);

	const url = `http://api.weatherapi.com/v1/current.json?key=cb04716f36054873aea65738242802&q=${search}&aqi=no`;

	const handleChange = (e) => {
		setsearchText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(searchText);
		setsearchText('');
	};

	useEffect(() => {
		if (search !== '') {
			getWeatherData();
		}
	}, [search]);

	const getWeatherData = async () => {
		try {
			let { data } = await axios.get(url);
			setWeatherData(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='w-full'>
				<div className='bg-blue-500 flex justify-center py-6 font-bold text-2xl text-white'>
					Weather App
				</div>
				<form
					className='flex w-full justify-center mt-6'
					onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Enter location'
						className='border rounded p-2'
						value={searchText}
						onChange={handleChange}
					/>
				</form>
				
				{search && <WeatherCardCrio weatherData={weatherData} />}
			</div>
		</>
	);
};

export default WeatherCrio;
