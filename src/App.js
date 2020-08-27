import React, {useReducer, useState} from 'react';
import Todo from './Todo';

export const ACTION = {
  ADD_TODO : "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
}

function reducer(todos, action){
  switch(action.type){
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTION.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
        return todo;
      })
    case ACTION.DELETE_TODO:
      return todos.filter(todo => todo.id != action.payload.id)
    default:
      return todos
  }
}

function newTodo(name){
  return {id: Date.now(), name: name, complete: false}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setname] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTION.ADD_TODO, payload: {name: name}})
    setname('');
  }

  return (
    <div className="App">
      <form onSubmit= {handleSubmit}>
        <input type="text" value={name} onChange ={e => setname(e.target.value)}/>
      </form>
      {todos.map(todo => {
        return <Todo id = {todo.id} todo = {todo} dispatch={dispatch}/>
      })}
    </div>
  );
}

export default App;
