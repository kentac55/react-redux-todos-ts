import { createSelector } from 'reselect'
import { RootState } from '../reducers'
import { todoReducer } from '../reducers/todos'
import { visibilityFilterReducer } from '../reducers/visibilityFilters'

export const appSelector = createSelector(
  (state: RootState) => state.app,
  app => app
)

export const filterSelector = createSelector(
  (state: RootState) => state.visibilityFilter,
  ({ visibilityFilter }) => visibilityFilter
)

export const todoSelector = createSelector(
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
