import React, { Component } from 'react';
import './App.css';
import {store} from './stores/todoStore.js';
import 'animate.css';

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

class TodoInput extends Component{
  constructor(props){
    super();
    this.state = {value: ""};
  }
  onKeyPress = (e) => {
    if(e.charCode == 13){
      this.addTodo();
    }
  }
  addTodo = () => {
    if(this.state.value != ""){
      store.dispatch({
        type: 'ADD_TODO',
        text: this.state.value
      })
      this.setState({
        value: ""
      })
      document.getElementById('todoInput').focus();
    }
  }
  setValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return(
      <div>
        <input type="text" id="todoInput" onChange={this.setValue} onKeyPress={this.onKeyPress} value={this.state.value} placeholder="Todo..."/>
        <button onClick={this.addTodo} >Add Todo</button>
      </div>
    )
  }
};

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
      <li className="animated bounceIn" style={{textDecoration: (this.props.completed ? "line-through" : "none")}} onClick={this.toggleTodo}>
      {this.props.todoText}
      </li>
    )
  }
}


export default App;
