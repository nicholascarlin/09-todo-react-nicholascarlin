import './App.css';

import React, { Component } from 'react';

import NewTodo from './NewTodo';
import Todo from './Todo';

class App extends Component {
	render() {
		return (
			<section id='myTodos'>
				<NewTodo />
				<Todo />
			</section>
		);
	}
}

export default App;
