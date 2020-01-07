import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodoOp } from '../actions'
import { TodoListView } from '../components/TodoList'
import { Todo, VisibilityFilterKinds } from '../types'

type TodoState = {
  todos: Todo[]
  visibilityFilter: VisibilityFilterKinds
}

const todoSelector = ({ todos, visibilityFilter }: TodoState): Todo[] => {
  switch (visibilityFilter) {
    case VisibilityFilterKinds.ALL:
      return todos
    case VisibilityFilterKinds.COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilterKinds.ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

export const TodoListContainer: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector(todoSelector)
  return (
    <TodoListView
      todos={todos}
      toggleTodoDispatcher={(todo: Todo) => (): void => {
        dispatch(toggleTodoOp({ todo }))
      }}
    />
  )
}
