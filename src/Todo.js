import React, { Component } from 'react';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.RMtodo(this.props.id)
    }
    render() {
        return <div>
            <span>{this.props.todo}
                <button onClick={this.handleClick}>x</button></span>
        </div>
    }
}

export default Todo;