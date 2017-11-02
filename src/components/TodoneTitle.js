import React, {Component} from 'react'

class TodoneTitle extends Component {
    render() {
        return (
            <div className="todoTitle">
                <h2 className="title">已经完成</h2>
                <span className="count">{this.props.len}</span>
            </div>
        )
    }
}

export default TodoneTitle
