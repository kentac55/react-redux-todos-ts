import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../actions'
import { AddTodoView } from '../components/AddTodo'

export const AddTodoContainer: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <AddTodoView
      dispatcher={(s: string) => (): void => {
        dispatch(addTodoAction(s))
      }}
    />
  )
}
