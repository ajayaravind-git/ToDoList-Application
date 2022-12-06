import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: [{ name: "wash clothes", id: 1 }, { name: 'water plants', id: 2 }]
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo) {
        this.setState({
            Todo: [...this.state.Todo, newTodo]
        })
    }
    remove(id) {
        this.setState({
            Todo: this.state.Todo.filter(td => (td.id != id))
        })
    }
    update(id, updatedName) {
        const updatedTodo = this.state.Todo.map(td => {
            if (td.id === id) {
                return { ...td, name: updatedName }
            }
            return td;
        })
        this.setState({
            Todo: updatedTodo
        })

    }
    toggleCompletion(id) {
        const updatedTodo = this.state.Todo.map(td => {
            if (td.id === id) {
                return { ...td, completed: !td.completed }
            }
            return td;
        })
        this.setState({
            Todo: updatedTodo
        })

    }
    render() {
        const Todolist = this.state.Todo.map(td => (<Todo todoCompleted={this.toggleCompletion} completed={td.completed} UPtodo={this.update} RMtodo={this.remove} key={td.id} todo={td.name} id={td.id} />))
        return <div className='card mx-auto my-5'>
            <section className='card-body '>
                <h1 className='card-title display-3'>Todo List</h1>
                <NewTodoForm addTodo={this.create} />
                {Todolist}
            </section>
        </div>
    }
}
export default TodoList;
