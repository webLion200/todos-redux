import React, {Component} from 'react'
import AddTodo from '../containers/AddTodo'
import TodoBody from './TodoBody'

import '../css/App.css';

class App extends Component {
	render() {
		return (
			<div>
				<AddTodo />
				<TodoBody />
			</div>
		)
	}
}

export default App