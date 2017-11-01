import React, {Component} from 'react'
import { connect } from 'react-redux'
import AddTodo from '../containers/AddTodo'
import TodoBody from './TodoBody'

import '../css/App.css';

const mapStateToProps = (state) => ({
	todos: state
});

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