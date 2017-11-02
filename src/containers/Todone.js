import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoneList from '../components/TodoneList'

const mapStateToProps = (state) => ({
    todos: state
});

const mapPropsToState = {
    onTodoClick: toggleTodo
};

const Todone = connect(
    mapStateToProps,
    mapPropsToState
)(TodoneList);

export default Todone