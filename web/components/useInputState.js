import {useState} from 'react'

export default function useInputState(init) {
  const [value, setValue] = useState(init)

  return {
    value,
    onChange: e => setValue(e.target.value),
    reset: () => setValue(init),
  }
}
