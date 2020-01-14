import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoListView } from '../components/TodoList'
import { useTypedSelector } from '../reducers'
import { Todo } from '../types'
import { todoSelector } from '../selectors'

export const TodoListContainer: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useTypedSelector(todoSelector)
  return (
    <TodoListView
      todos={todos}
      dispatcher={(todo: Todo) => (): void => {
        dispatch(toggleTodo.started({ todo }))
      }}
    />
  )
}
