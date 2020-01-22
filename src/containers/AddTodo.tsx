import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'
import { AddTodoView } from '../components/AddTodo'

export const AddTodoContainer: React.FC = () => {
  const dispatch = useDispatch()
  const dispatcher = useCallback(
    (text: string) => {
      dispatch(addTodo.started({ text }))
    },
    [dispatch]
  )
  const inputRef = useRef<HTMLInputElement>(null)
  return <AddTodoView dispatcher={dispatcher} input={inputRef} />
}
