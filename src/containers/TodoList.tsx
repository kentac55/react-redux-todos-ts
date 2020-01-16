import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoListView } from '../components/TodoList'
import { useTypedSelector } from '../hooks'
import { Todo } from '../types'
import { todoSelector } from '../selectors'

export const TodoListContainer: React.FC = () => {
  const dispatch = useDispatch()
  const dispatcher = useCallback(
    (todo: Todo) => {
      dispatch(toggleTodo.started({ todo }))
    },
    [dispatch]
  )
  const todos = useTypedSelector(todoSelector)
  return <TodoListView todos={todos} dispatcher={dispatcher} />
}
