import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../actions'

export const AddTodo: React.FC = () => {
  const dispatch = useDispatch()
  const input = React.createRef<HTMLInputElement>()
  return (
    <div>
      <form
        onSubmit={(ev: React.FormEvent<HTMLFormElement>): void => {
          ev.preventDefault()
          if (!input.current?.value.trim()) {
            return
          }
          dispatch(addTodoAction(input.current.value))
          input.current.value = ''
        }}
      >
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
