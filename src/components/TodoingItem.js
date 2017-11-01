import React, {Component} from 'react'

class TodoingItem extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <li className="todoItem">
                <input type="checkbox" onClick={onClick}/>
                <span>{this.props.text}</span>
                <a href="javascript:void(0)">-</a>
            </li>
        )
    }
}

export default TodoingItem