import React, {Component} from 'react'

class TodoneItem extends Component {
    render() {
        const {text, onTodoClick, completed} = this.props;
        return (
            <li className="todoItem">
                <input type="checkbox" onClick={onTodoClick}
                       defaultChecked={completed}/>
                <span>{text}</span>
                <a href="javascript:void(0)">-</a>
            </li>
        )
    }
}

export default TodoneItem