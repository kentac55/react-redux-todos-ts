import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodoAction } from '../actions'
import { TodoView } from './Todo'
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

export const TodoListView: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector(todoSelector)
  return (
    <ul>
      {todos.map(todo => (
        <TodoView
          key={todo.id}
          {...todo}
          onClick={(): void => {
            dispatch(toggleTodoAction(todo.id))
          }}
        />
      ))}
    </ul>
  )
}
