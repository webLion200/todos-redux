import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
//import TodoingTitle from './TodoingTitle'
import TodoingList from './TodoingList'

const mapStateToProps = (state) => ({
    todos: state
});

const mapPropsToState = {
    onTodoClick: toggleTodo
};

const Todoing = connect(
    mapStateToProps,
    mapPropsToState
)(TodoingList);

// class Todoing extends Component {
//     render() {
//         return (
//             <div className="todos">
//                 <TodoingTitle />
//                 <TodoingList todos={this.props.todos}/>
//             </div>
//         )
//     }
// }




export default Todoing