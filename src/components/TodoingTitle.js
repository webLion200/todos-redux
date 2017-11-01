import React, {Component} from 'react'

class TodoingTitle extends Component {
    render() {
        const {todos} = this.props;
        let len = todos.filter(function (todo) {
            return todo.completed === false
        }).length;
        return (
            <div className="todoTitle">
                <h2 className="title">正在进行</h2>
                <span className="count">{len}</span>
            </div>
        )
    }
}

export default TodoingTitle
