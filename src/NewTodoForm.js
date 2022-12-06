import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newtodo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = ({ name: this.state.newtodo, id: uuid() })
        this.props.addTodo(newTodo);

    }
    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.newtodo} id="newtodo" name="newtodo" placeholder='New Todo' onChange={this.handleChange} />
                <button>Add</button>
            </form>

        </div>
    }
}

export default NewTodoForm;