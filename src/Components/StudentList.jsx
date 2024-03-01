// import React, { useState } from 'react';

// const StudentList = () => {
// 	const [name, setname] = useState('');
// 	const [age, setage] = useState(+0);
// 	const [grade, setgrade] = useState(+0);
// 	const [studentData, setstudentData] = useState([]);

// 	const handleName = (e) => {
// 		setname(e.target.value);
// 	};
// 	const handleAge = (e) => {
// 		setage(+e.target.value);
// 	};
// 	const handleGrade = (e) => {
// 		setgrade(+e.target.value);
// 	};

// 	const handleStudentData = () => {
// 		setstudentData([...studentData, { name, age, grade }]);
// 		setname('');
// 		setage(0);
// 		setgrade(0);
// 	};

// 	console.log(studentData);

// 	return (
// 		<div>
// 			{/* Input fields for new student */}
// 			<div>
// 				<label htmlFor='name'>Name:</label>
// 				<input
// 					onChange={handleName}
// 					type='text'
// 					id='name'
// 					// Add appropriate props to link with state
// 					placeholder='Enter name'
// 				/>

// 				<label htmlFor='age'>Age:</label>
// 				<input
// 					onChange={handleAge}
// 					type='number'
// 					id='age'
// 					// Add appropriate props to link with state
// 					placeholder='Enter age'
// 				/>

// 				<label htmlFor='grade'>Grade:</label>
// 				<input
// 					onChange={handleGrade}
// 					type='number'
// 					id='grade'
// 					// Add appropriate props to link with state
// 					placeholder='Enter grade'
// 				/>

// 				<button onClick={handleStudentData}>Add</button>
// 			</div>

// 			{/* List of students */}
// 			<ul>
// 				{studentData.map((student, idx) => (
// 					<li key={idx}>{student.name}</li>
// 				))}
// 			</ul>

// 			{/* Input field and button for grade filter */}
// 			<div>
// 				<label htmlFor='gradeFilter'>Filter by Grade:</label>
// 				<input
// 					type='number'
// 					id='gradeFilter'
// 					// Add appropriate props to link with state
// 					placeholder='Enter grade'
// 				/>

// 				<button
// 					onClick={() => {
// 						/* Add logic to filter students by grade */
// 					}}>
// 					Filter
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default StudentList;

import React, { useState } from 'react';

const StudentList = () => {
	const [name, setname] = useState('');
	const [age, setage] = useState('');
	const [grade, setgrade] = useState('');
	const [studentData, setstudentData] = useState([]);
	const [gradeFilter, setGradeFilter] = useState('');

	const handleName = (e) => {
		setname(e.target.value);
	};

	const handleAge = (e) => {
		setage(+e.target.value);
	};

	const handleGrade = (e) => {
		setgrade(+e.target.value);
	};

	const handleStudentData = () => {
		setstudentData([...studentData, { name, age, grade }]);
		setname('');
		setage('');
		setgrade('');
	};

	const handleFilter = () => {
		// Filter students based on the entered grade
		const filteredStudents = studentData.filter(
			(student) => student.grade >= gradeFilter,
		);

		// Update the state to show only filtered students
		setstudentData(filteredStudents);
	};

	return (
		<div>
			{/* Input fields for new student */}
			<div>
				<label htmlFor='name'>Name:</label>
				<input
					onChange={handleName}
					type='text'
					id='name'
					value={name}
					placeholder='Enter name'
				/>

				<label htmlFor='age'>Age:</label>
				<input
					onChange={handleAge}
					type='number'
					id='age'
					value={age}
					placeholder='Enter age'
				/>

				<label htmlFor='grade'>Grade:</label>
				<input
					onChange={handleGrade}
					type='number'
					id='grade'
					value={grade}
					placeholder='Enter grade'
				/>

				<button onClick={handleStudentData}>Add</button>
			</div>

			{/* List of students */}
			<ul>
				{studentData.length === 0 && <li>No student record found</li>}
				{studentData.map((student, idx) => (
					<li key={idx}>{student.name}</li>
				))}
			</ul>

			{/* Input field and button for grade filter */}
			<div>
				<label htmlFor='gradeFilter'>Filter by Grade:</label>
				<input
					type='number'
					id='gradeFilter'
					value={gradeFilter}
					onChange={(e) => setGradeFilter(+e.target.value)}
					placeholder='Enter grade'
				/>

				<button onClick={handleFilter}>Filter</button>
			</div>
		</div>
	);
};

export default StudentList;
