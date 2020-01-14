import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'
import { AddTodoView } from '../components/AddTodo'

export const AddTodoContainer: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <AddTodoView
      dispatcher={(text: string) => (): void => {
        dispatch(addTodo.started({ text }))
      }}
    />
  )
}
