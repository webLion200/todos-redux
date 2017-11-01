import React, {Component} from 'react'
import TodoingTitle from './TodoingTitle'
import TodoingItem from './TodoingItem'

class TodoingList extends Component {
    render() {
        const {todos, onTodoClick} = this.props;
        return (
            <div className="todos">
                <TodoingTitle todos={todos}/>
                <ul className="todoList">
                    {todos.map(todo => {
                            if (todo.completed === false) {
                                return (
                                    <TodoingItem
                                    key={todo.id}
                                    {...todo}
                                    onClick={() => {
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

export default TodoingList