import { createStore } from 'redux';

const todo = (state = {todos: [], test: true}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log("Added a new Todo");
      return {
        todos: [
          ...state.todos,
          {
            id: (state.todos.length),
            text: action.text,
            completed: false
          }
        ],
        test: state.test
      };
    case 'TOGGLE_TODO':
    console.log("Toggled the Todo");
    return {
      todos:
        state.todos.map(function(todo){
          if (todo.id !== action.id){
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      ,
      test: state.test
    };
    case 'DELETE_TODO':
    console.log("Deleted the Todo");
    return {
      todos:
        state.todos.filter(function(todo){
          if(todo.id !== action.id){
            return todo;
          }
        })
      ,
      test: state.test
    };
    default:
      return state;
  }
}

let store = createStore(todo);

export {store};
