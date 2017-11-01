import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

class AddTodos extends Component {
    render() {
        const {dispatch} = this.props;
        return (
            <header className="header">
                <form onSubmit={e => {
                        e.preventDefault();
                        let val = this.inputText.value;
                        if(!val.trim()) {
                            return;
                        }
                        dispatch(addTodo(val));
                        this.inputText.value = '';
                    }
                }>
                    <label className="title">ToDoList</label>
                    <input
                        type="text"
                        placeholder="添加ToDo"
                        ref={input => this.inputText = input}/>
                </form>
            </header>
        )
    }
}

const AddTodo = connect()(AddTodos);

export default AddTodo