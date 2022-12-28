import React from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteItemHandler = () => {
		const allTodos = [...todos];
		setTodos(allTodos.filter((el) => el.id !== todo.id));
	};

	const completedItemHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	return (
		<div className=" flex justify-center gap-3 items-center bg-amber-400">
			<li className={`p-1 lg:flex-0 flex-1 lg:w-auto w-2/3 ${todo.completed ? 'text-gray-500 line-through' : 'no-underline'}`}>{text}</li>
			<section className="flex gap-1">
				<button onClick={completedItemHandler}>
					<i>
						<AiOutlineCheckSquare
							size={20}
							className="bg-green-600 text-white"
						/>
					</i>
				</button>
				<button onClick={deleteItemHandler}>
					<i>
						<BsFillTrashFill
							size={20}
							className="bg-red-600 text-white "
						/>
					</i>
				</button>
			</section>
		</div>
	);
};

export default Todo;
