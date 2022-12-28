import { useState, useEffect } from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
	//statee
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	//use effect
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);
	//functions

	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	//save to local 
	const saveLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	};

	return (
		<div className="flex self-center flex-col items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			<header className="flex items-center justify-center pt-5">
				<h1 className="text-white text-3xl font-bold font-mono">Todo list</h1>
			</header>
			<Form
				setInputText={setInputText}
				setTodos={setTodos}
				todos={todos}
				inputText={inputText}
				setStatus={setStatus}
			/>
			<TodoList
				setTodos={setTodos}
				todos={todos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default App;
