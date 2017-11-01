import React, {Component} from 'react'
import TodoneTitle from './TodoneTitle'
import TodoneList from './TodoneList'

class Todone extends Component {
    render() {
        return (
            <div className="todos">
                <TodoneTitle />
                <TodoneList />
            </div>
        )
    }
}

export default Todone