import React, { useState, useEffect } from 'react';

const GitHubRepositories = () => {
	const [username, setusername] = useState('');
	const [repos, setrepos] = useState([]);

	async function getUser() {
		if (username.trim() !== '') {
			try {
				let res = await fetch(
					`https://api.github.com/users/${username}/repos`,
				);
				let data = await res.json();
				console.log(data);
				setrepos(data);
				setusername('');
			} catch (error) {
				console.log(error);
			}
		}
	}

	const handleName = (e) => {
		setusername(e.target.value);
	};

	return (
		<div>
			{/* Input field for GitHub username */}
			<div>
				<label htmlFor='username'>GitHub Username:</label>
				<input
					onChange={handleName}
					type='text'
					id='username'
					value={username}
					// Add appropriate props to link with state
					placeholder='Enter GitHub username'
				/>

				<button
					onClick={() => {
						/* Add logic to fetch repositories based on the entered username */
						getUser();
					}}>
					Get Repositories
				</button>
			</div>

			{/* Display the list of repositories */}
			<ul>
				{/* Map through repositories and display each repository */}
				{/* Each repository should include the name and a link to the repository */}
				{repos.map((repo) => (
					<li key={repo.id}>
						{repo.name} <a href={repo.url}>go there</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GitHubRepositories;
