import { useState } from 'react';

const LoginForm = () => {
	const [username, setusername] = useState('');
	const [password, setpassword] = useState('');

	const handleName = (e) => {
		setusername(e.target.value);
	};
	const handlePassword = (e) => {
		setpassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username !== '' && password !== '') {
			alert(username);
			alert(password);
		} else {
			console.log('enter the feilds');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>User Name</label>
				<input type='text' id='name' onChange={handleName} />
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					onChange={handlePassword}
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};

export default LoginForm;
