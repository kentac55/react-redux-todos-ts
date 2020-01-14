import React from 'react'
import { useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { toggleTodoEv } from '../actions'
import { TodoListView } from '../components/TodoList'
import { RootState, useTypedSelector } from '../reducers'
import { todoReducer } from '../reducers/todos'
import { visibilityFilterReducer } from '../reducers/visibilityFilters'
import { Todo } from '../types'

const todoSelector = createSelector(
  [
    (state: RootState): ReturnType<typeof todoReducer> => state.todos,
    (state: RootState): ReturnType<typeof visibilityFilterReducer> =>
      state.visibilityFilter,
  ],
  ({ todos }, { visibilityFilter }) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      default:
        return todos
    }
  }
)

export const TodoListContainer: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useTypedSelector(todoSelector)
  return (
    <TodoListView
      todos={todos}
      dispatcher={(todo: Todo) => (): void => {
        dispatch(toggleTodoEv.started({ todo }))
      }}
    />
  )
}
