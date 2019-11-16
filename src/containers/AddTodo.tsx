import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { TodoAction } from '../types'

const AddTodo: React.FC<{ dispatch: (arg0: TodoAction) => void }> = ({
  dispatch,
}: {
  dispatch: (arg0: TodoAction) => void
}) => {
  const input = React.createRef<HTMLInputElement>()
  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
          e.preventDefault()
          if (!input.current?.value.trim()) {
            return
          }
          dispatch(addTodo(input.current.value))
          input.current.value = ''
        }}
      >
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
