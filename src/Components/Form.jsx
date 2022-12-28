import React from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
	const inputChangeHandler = (event) => {
		setInputText(event.target.value);
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.floor(Math.random() * 1000),
			},
		]);
		setInputText('');
	};
	return (
		<form className=" flex items-center mt-10 ">
			<input
				type="text"
				value={inputText}
				className="indent-2"
				placeholder="Enter task..."
				onChange={inputChangeHandler}
			/>
			<button
				onClick={submitHandler}
				type="submit"
				className="bg-amber-400 rounded"
			>
				<AiOutlinePlusSquare size={25} />
			</button>
			<div className="select ml-3 ">
				<select
					name="todos"
					className=""
					onChange={statusHandler}
				>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Unconpleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
