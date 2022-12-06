import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import React, { Component } from 'react'
class App extends Component {
  render() {
    return <div className='App'>
      <TodoList />
    </div>
  }
}

export default App;
