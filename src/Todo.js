import React from 'react'
import {ACTION} from './App'
export default function Todo({todo, dispatch}) {
    function handleToggle(){
        dispatch({ type: ACTION.TOGGLE_TODO, payload: {id:todo.id}})
    }

    return (
        <div>
            <span style = {{color: todo.complete ? '#AAA ': '#000'}}>
                {todo.name}
            </span>

            <button onClick={handleToggle}>Toggle</button>
            <button onClick={() => {dispatch({type: ACTION.DELETE_TODO, payload: {id: todo.id}})}}>Delete</button>
        </div>
    )
}
