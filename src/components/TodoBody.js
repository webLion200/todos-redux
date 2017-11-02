import React, {Component} from 'react'
//import { connect } from 'react-redux'
import Todoing from '../containers/Todoing'
import Todone from '../containers/Todone'

// const mapStateToProps = (state) => ({
//     todos: state
// });

class TodoBody extends Component {
    render() {
        return (
            <div className="todoBody">
                <Todoing />
                <Todone />
            </div>
        )
    }
}

//const TodoBody = connect(mapStateToProps)(TodoBodys);

export default TodoBody