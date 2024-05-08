import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/TodoSlice';
import { RootState } from './store/store';

export default function Todo() {
	const todos = useSelector((state: RootState) => state.todo.item);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(addTodo(e.target.myinput.value));
		e.target.myinput.value = '';
	};
	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<h1>ToDo List✌️:</h1>
			<ul>
				{todos.map((val) => (
					<li>{val}</li>
				))}
			</ul>
			<form onSubmit={handleSubmit}>
				<input placeholder='What do you have to do' name='myinput' />
				<button type='submit'>add ➕</button>
			</form>
		</div>
	);
}
