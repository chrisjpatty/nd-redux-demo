import React, { Component } from 'react';
import './App.css';
import {store} from './stores/todoStore.js';

class App extends Component {
  constructor(props){
    super();
  }
  render = () => {
    console.log(this.props.redux);
    return (
      <div className="App">
        <TodoInput />
        <ul>
          {
            this.props.redux.todos.map(function(todo, i){
              return <Todo todoText={todo.text} completed={todo.completed} id={todo.id} key={i}/>
            }, this)
          }
        </ul>
      </div>
    );
  }
}

class Todo extends Component{
  constructor(props){
    super();
  }
  toggleTodo = () => {
    store.dispatch({
      type: "TOGGLE_TODO",
      id: this.props.id
    })
  }
  render() {
    return(
      <li style={{textDecoration: (this.props.completed ? "line-through" : "none")}} onClick={this.toggleTodo}>
      {this.props.todoText}
      </li>
    )
  }
}

class TodoInput extends Component{
  constructor(props){
    super();
    this.state = {value: ""};
  }
  addTodo = () => {
    store.dispatch({
      type: 'ADD_TODO',
      text: this.state.value
    })
  }
  setValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return(
      <div>
        <input type="text" onChange={this.setValue} value={this.state.value}/>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    )
  }
};

export default App;
