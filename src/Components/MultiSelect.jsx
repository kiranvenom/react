import { useState } from 'react';

let states = [
	{
		id: 1,
		name: 'Karnataka',
		cities: ['Belagavi', 'Davangere', 'Mysuru'],
	},
	{
		id: 2,
		name: 'Kerala',
		cities: ['Thiruvananthapuram', 'Kollam', 'Palakkad', 'Kochi'],
	},
	{
		id: 3,
		name: 'Rajasthan',
		cities: ['Churu', 'Kishangarh', 'Kota'],
	},
];

const MultiSelect = () => {
	const [selectedState, setSelectedState] = useState('');

	function handleStates(idx) {
		setSelectedState(states[idx]);
	}

	return (
		<>
			<select onChange={(e) => handleStates(e.target.value)}>
				<option value='' disabled selected>
					Select a state
				</option>
				{states.map((state, idx) => (
					<option value={idx} key={state.id}>
						{state.name}
					</option>
				))}
			</select>

			{selectedState && (
				<div>
					<h2
						style={{
							margin: '2rem',
						}}>
						Selected State: {selectedState.name}
					</h2>
					<h3
						style={{
							textAlign: 'center',
						}}>
						Cities:
					</h3>
					<ul>
						{selectedState.cities.map((city, index) => (
							<li key={index}>{city}</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default MultiSelect;
