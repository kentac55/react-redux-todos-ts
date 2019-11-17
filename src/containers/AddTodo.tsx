import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions/todos'
import { TodoAction } from '../types'

type AddTodoDispatch = { dispatch: (arg0: TodoAction) => void }

const AddTodo: React.FC<AddTodoDispatch> = ({ dispatch }: AddTodoDispatch) => {
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

export default connect()(AddTodo)
