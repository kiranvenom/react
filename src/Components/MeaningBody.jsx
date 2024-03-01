const MeaningBody = ({ data }) => {
	if (
		!data ||
		!data.meanings ||
		data.meanings.length === 0 ||
		!data.meanings[0].definitions
	) {
		return null;
	}

	return (
		<>
			<div className='flex justify-center w-[50vw] m-auto mt-6 flex-col'>
				<h1 className='font-bold text-2xl capitalize'>{data.word}</h1>

				<div className='mt-6'>
					{data.meanings.map((meaning, index) => (
						<div key={index} className='border p-4 mb-4 rounded-md'>
							<h2>Definition {index + 1}:</h2>
							{meaning.definitions.map((definition, subIndex) => (
								<h5
									className='bg-green-100 my-1 p-2 rounded-md'
									key={subIndex}>
									{definition.definition}
								</h5>
							))}
							{meaning.definitions[0].example && (
								<p>
									<strong>Example:</strong>{' '}
									{meaning.definitions[0].example}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MeaningBody;
