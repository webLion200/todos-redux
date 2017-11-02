import React, {Component} from 'react'
import TodoneTitle from '../components/TodoneTitle'
import TodoneList from '../components/TodoneList'

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