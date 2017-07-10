import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Todo from './todo.js'

class App extends Component {
  constructor() {
      super()
      this.state = {
        todoList : []
      }

      // this.todoInput = ""
      
    }

    addTodo() {
      let todoValue = this.todoInput.value
      let newTodos = this.state.todoList
      newTodos.push(todoValue)

      this.setState({
        todoList: newTodos
      })

      this.todoInput.value = ""
    }

    removeTodo(id) {
       let todoList = this.state.todoList.filter((todo, index) => {
         return id != index
       })

       this.setState({
         todoList : todoList
       })
    }
  render() {
    
    return (
      <div className="App">
        <h1>React Todo</h1>
        <p>Todo's count: {this.state.todoList.length}</p>
        <input type="text" placeholder="Enter Your Task" ref={(input) => this.todoInput = input} />
        <button onClick={this.addTodo.bind(this) } >Add</button>
        <ul>
          {
            this.state.todoList.map((todo,index) => {
              return (<Todo id={index} key={index} todo = {todo} onRemove={() => this.removeTodo(index)} /> )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
