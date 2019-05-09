import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'

export default function TodoForm({saveTodo}) {
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        saveTodo(value)
        setValue('')
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={event => setValue(event.target.value)}
        value={value}
      />
    </form>
  )
}
