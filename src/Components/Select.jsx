import { useEffect, useState } from 'react';

const Select = () => {
	const [countries, setcountries] = useState([]);
	useEffect(() => {
		async function fetchCountries() {
			try {
				let res = await fetch('https://restcountries.com/v3.1/all');
				let data = await res.json();
				let contriesName = data.map((contries) => contries.name.common);
				setcountries(contriesName);
			} catch (error) {
				console.error('Error fetching countries:', error);
			}
		}

		fetchCountries();
	}, []);

	const disabledContries = [
		'Cuba',
		'Ghana',
		'Poland',
		'Finland',
		'Peru',
		'Togo',
		'Mali',
		'Japan',
	];

	return (
		<>
			<div className='custom-select'>
				<select name='cars' id='cars'>
					{countries.length == 0 && (
						<option value=''>Select your prefered contry .</option>
					)}
					{countries.map((country, idx) => (
						<option
							style={{ cursor: 'pointer' }}
							key={idx}
							value={country}
							disabled={disabledContries.includes(country)}>
							{country}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default Select;
