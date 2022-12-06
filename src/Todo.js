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
                    <button className='btn btn-success my-3 mx-3 btn-sm'>Save</button>
                </form>)

        } else {
            result = <div>

                <span onClick={this.handleToggleClick} className={this.props.completed ? 'completed' : 'notCompleted px-3 py-1'}>{this.props.todo}</span>
                <button className='btn btn-primary mx-3 my-3 btn-sm' onClick={this.toggleForm}>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={this.handleClick}>Delete</button>
            </div>
        }
        return result;
    }
}

export default Todo;