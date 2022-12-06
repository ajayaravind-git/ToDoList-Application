import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: [{ name: "wash clothes", id: 1 }, { name: 'water plants', id: 2 }]
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }
    create(newTodo) {
        this.setState({
            Todo: [...this.state.Todo, newTodo]
        })
    }
    remove(id) {
        this.setState({
            Todo: this.state.Todo.filter(Todo.id != id)
        })
    }
    render() {
        const Todolist = this.state.Todo.map(td => (<Todo todo={td.name} />))
        return <div>
            <NewTodoForm addTodo={this.create} />
            <Todo todo={Todolist} />
        </div>
    }
}
export default TodoList;
