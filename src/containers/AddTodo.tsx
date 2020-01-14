import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodoEv } from '../actions'
import { AddTodoView } from '../components/AddTodo'

export const AddTodoContainer: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <AddTodoView
      dispatcher={(text: string) => (): void => {
        dispatch(addTodoEv.started({ text }))
      }}
    />
  )
}
