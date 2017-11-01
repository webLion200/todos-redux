import React, {Component} from 'react'
import TodoneItem from './TodoneItem'

class TodoneList extends Component {
    render() {
        return (
            <ul className="todoList">
                <TodoneItem />
            </ul>
        )
    }
}

export default TodoneList