import React, {Component} from 'react'
import TodoneTitle from './TodoneTitle'
import TodoneItem from './TodoneItem'

class TodoneList extends Component {
    render() {
        const {todos, onTodoClick} = this.props;
        let len = todos.filter(function (todo) {
            return todo.completed === true
        }).length;
        return (
            <div className="todos">
                <ul className="todoList">
                    <TodoneTitle len={len}/>
                    {todos.map(todo => {
                            if (todo.completed === true) {
                                return (
                                    <TodoneItem
                                        key={todo.id}
                                        {...todo}
                                        onTodoClick={() => {
                                                onTodoClick(todo.id)
                                            }}
                                    />
                                )
                            }
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoneList