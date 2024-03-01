// // https://mockbackenddata.onrender.com/userData

// import { useEffect, useState } from 'react';
// import UserCard from './UserCard';
// import { Input } from '@/components/ui/input';

// import axios from 'axios';

// const MockUser = () => {
// 	const [userData, setUserData] = useState([]);
// 	const [search, setSearch] = useState('');
// 	const [loading, setLoading] = useState(false);

// 	useEffect(() => {
// 		const getUser = async () => {
// 			try {
// 				setLoading(true);
// 				let { data } = await axios.get(
// 					'https://mockbackenddata.onrender.com/userData',
// 				);
// 				setUserData(data);
// 				setLoading(false);
// 			} catch (error) {
// 				console.log(error);
// 				setLoading(false);
// 			}
// 		};
// 		getUser();
// 	}, []);

// 	const handleChange = (e) => {
// 		setSearch(e.target.value);
// 	};

// 	return (
// 		<>
// 			<Input
// 				className='w-1/2 my-8 fixed top-0 z-10 bg-white'
// 				placeholder='search animal'
// 				onChange={(e) => handleChange(e)}
// 				value={search}
// 			/>

// 			<div className='grid grid-cols-3 gap-4 mt-[8rem]'>
// 				{loading ? (
// 					<h1>Loading...</h1>
// 				) : (
// 					userData.map((user) => (
// 						<UserCard
// 							key={user.id}
// 							name={user.username}
// 							email={user.email}
// 							id={user.id}
// 						/>
// 					))
// 				)}
// 			</div>
// 		</>
// 	);
// };

// export default MockUser;

import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { Input } from '@/components/ui/input';
import axios from 'axios';

const MockUser = () => {
	const [userData, setUserData] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getUser = async () => {
			try {
				setLoading(true);
				let { data } = await axios.get(
					'https://mockbackenddata.onrender.com/userData',
				);
				setUserData(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		getUser();
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredUserData = userData.filter((user) =>
		user.username.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<>
			<Input
				className='w-1/2 my-8 fixed top-0 z-10 bg-white'
				placeholder='Search user'
				onChange={(e) => handleChange(e)}
				value={search}
			/>

			<div className='grid grid-cols-3 gap-4 mt-[8rem] mb-8'>
				{loading ? (
					<h1>Loading...</h1>
				) : (
					filteredUserData.map((user) => (
						<UserCard
							key={user.id}
							name={user.username}
							email={user.email}
							id={user.id}
						/>
					))
				)}
			</div>
		</>
	);
};

export default MockUser;
