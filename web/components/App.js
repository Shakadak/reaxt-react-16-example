import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import '../css/styles.css'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

import useTodoState from './useTodoState'

const App = () => {
  const {todos, addTodo, removeTodo} = useTodoState([])

  const saveTodo = todoText => {
    const trimmedText = todoText.trim()

    if (trimmedText.length > 0) {
      addTodo(trimmedText)
    }
  }

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm saveTodo={saveTodo}/>
      <TodoList todos={todos} deleteTodo={removeTodo}/>
    </div>
  )
}

module.exports = {
  reaxt_server_render(params, render) { // server side call, should call render(ReactComp)
    render(<App/>)
  },
  reaxt_client_render(initialProps, render) { // initial client side call, should call render(ReactComp)
    render(<App/>)
  }
}
