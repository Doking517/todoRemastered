import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="mt-10 ">
			<ul className="flex flex-col gap-3">
				{filteredTodos.map((todo) => (
					<Todo
						setTodos={setTodos}
						todos={todos}
						todo={todo}
						text={todo.text}
						key={todo.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
