import React, {useState} from 'react'

let nextTodoId = 0;
  
function ToDo (props) {
  const {store} = props
  const state = store.getState()
  const todos = state.todos

  const [todolist, setTodolist] = useState('')



  const changeHandler = (e) => {
    setTodolist(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()

  

    store.dispatch({
      type: 'ADD_TODO',
      text: todolist,
      id: nextTodoId++,
    })
    setTodolist('')
  }

  return (
    <div>
    <h1>To Do</h1>
    <form onSubmit={addTodo}>
    <input type="text" value={todolist} onChange={changeHandler} /> 
    <button>Add To Do</button>
    </form>
    <ul>
    {todos.map((todo) => 
      <li key={todo.id}>{todo.text}</li>
    )}
    </ul>
    </div>
  )
}

export default ToDo
