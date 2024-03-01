import React, { useState } from 'react';

const CountryDropDown = () => {
	const [cities, setCities] = useState([]);
	let countries = [
		{ state: 'Karnataka', cities: ['Bangalore', 'Udipi', 'Mangalore'] },
		{ state: 'Delhi', cities: ['Delhi NCR', 'Bandra', 'Sarogani'] },
		{ state: 'TamilNadu', cities: ['Chennai', 'Trivandrum'] },
		{ state: 'Andra Pradesh', cities: ['Hyderabad', 'chasgud'] },
	];

	const handleSelect = (e) => {
		let selectedCountry = countries.find(
			(country) => country.state === e.target.value,
		);
		let selectedCities = selectedCountry ? selectedCountry.cities : [];
		setCities(selectedCities);
	};

	return (
		<>
			<div className='h-screen'>
				<select name='countries' id='countries' onChange={handleSelect}>
					<option value='' defaultValue disabled>
						Select One
					</option>
					{countries.map((country, idx) => {
						return (
							<option key={idx} value={country.state}>
								{country.state}
							</option>
						);
					})}
				</select>

				<select>
					{cities.map((city, idx) => {
						return (
							<option key={idx} value={city}>
								{city}
							</option>
						);
					})}
				</select>
			</div>
		</>
	);
};

export default CountryDropDown;
