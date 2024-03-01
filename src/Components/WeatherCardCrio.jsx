const WeatherCardCrio = ({ weatherData }) => {
	if (!weatherData) {
		return (
			<div className='flex justify-center mt-10 font-bold text-2xl'>
				laoding...
			</div>
		);
	}

	return (
		<>
			<h1 className='flex justify-center mt-10 font-bold text-2xl'>
				{weatherData.location.name},{weatherData.location.country}
			</h1>

			<div className='flex justify-center mt-10'>
				<div className='w-[25rem] p-4 shadow-lg rounded-md'>
					<div className='w-[6rem] h-[6rem] overflow-hidden'>
						<img src={weatherData.current.condition.icon} alt='' />
					</div>
					<div className='flex justify-between mt-10'>
						<h2>Temperature</h2>{' '}
						<h2>
							{weatherData.current.feelslike_c}°C /
							{weatherData.current.feelslike_f}°F
						</h2>
					</div>
					<div className='flex justify-between'>
						<h2>Condition</h2>{' '}
						<h2>{weatherData.current.condition.text}</h2>
					</div>
					<div className='flex justify-between'>
						<h2>Wind Speed</h2>{' '}
						<h2>{weatherData.current.wind_kph} km/h</h2>
					</div>
					<div className='flex justify-between'>
						<h2>Humidity</h2>{' '}
						<h2>{weatherData.current.humidity} %</h2>
					</div>
					<div className='flex justify-between'>
						<h2>Cloud Coverage</h2>{' '}
						<h2>{weatherData.current.cloud} %</h2>
					</div>
					<div className='flex justify-between'>
						<h2>lastUpdate</h2>{' '}
						<h2>{weatherData.current.last_updated}</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherCardCrio;
