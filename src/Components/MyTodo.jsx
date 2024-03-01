import { useState } from 'react';

const MyTodo = () => {
	const [todoInput, settodoInput] = useState('');
	const [todos, settodos] = useState([]);

	function handleInput(e) {
		settodoInput(e.target.value);
	}
	function addTodo(e) {
		e.preventDefault();
		if (todoInput.trim() !== '') {
			settodos([...todos, todoInput]);
			settodoInput('');
		}
	}
	return (
		<>
			<h1>MyTodos</h1>
			<form onSubmit={addTodo}>
				<input
					style={{
						border: '1px solid #000',
						padding: '0.4rem',
						fontSize: '1.4rem',
					}}
					type='text'
					value={todoInput}
					onChange={handleInput}
				/>
			</form>
			<ul>
				{todos.map((elem, idx) => (
					<li key={idx}>{elem}</li>
				))}
			</ul>
		</>
	);
};

export default MyTodo;
