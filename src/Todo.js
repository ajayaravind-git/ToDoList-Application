import React, { Component } from 'react';
import './Todo.css'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggleClick = this.handleToggleClick.bind(this)

        this.state = {
            isEditing: false,
            task: this.props.todo
        }
    }
    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleClick() {
        this.props.RMtodo(this.props.id)
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.UPtodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })

    }
    handleToggleClick() {
        this.props.todoCompleted(this.props.id)
    }
    handleChange(evt) {
        this.setState(
            { [evt.target.name]: evt.target.value })

    }
    render() {
        let result;
        if (this.state.isEditing) {
            result =
                (<form onSubmit={this.handleUpdate}>
                    <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                    <button>Save</button>
                </form>)

        } else {
            result = <div>

                <span onClick={this.handleToggleClick} className={this.props.completed ? 'completed' : 'notCompleted'}>{this.props.todo}</span>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleClick}>x</button>
            </div>
        }
        return result;
    }
}

export default Todo;