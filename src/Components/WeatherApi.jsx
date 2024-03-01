import { useEffect, useState } from 'react';

const WeatherApi = ({ lat, long }) => {
	const [weather, setweather] = useState([]);
	useEffect(() => {
		async function getWeather() {
			let res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1947d881b188727e23e4713cf0185cdb`,
			);
			let data = await res.json();
			setweather(data);
		}
		getWeather();	
	}, []);


	return (
		<>
			<div className='w-[300px] h-[400px] bg-green-100 flex flex-col justify-center items-center m-3'>
				<h1>{weather.name}</h1>
				{/* <h2 className='my-4 text-4xl font-bold'>
					{(weather.main.temp - 273.15).toFixed(2)}
				</h2> */}
				{/* <h4>{weather.weather[0].main}</h4> */}
			</div>
		</>
	);
};

export default WeatherApi;
