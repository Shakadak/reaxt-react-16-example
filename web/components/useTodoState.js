import {useState} from 'react'

export default function useTodoState(initialValue) {
  const [todos, setTodos] = useState(initialValue)


  return {
    todos,
    addTodo: x => setTodos(xs => [...xs, x]),
    removeTodo: index => setTodos(xs => xs.filter((x, i) => i !== index)),
  }
}
