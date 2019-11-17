import React from 'react'
import { Action } from 'redux'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions'

type AddTodoDispatch = { dispatch: (arg0: Action) => void }

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
