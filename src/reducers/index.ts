import { combineReducers } from 'redux'
import { todoReducer } from './todos'
import { appReducer } from './app'
import { visibilityFilterReducer } from './visibilityFilters'

export const rootReducer = combineReducers({
  app: appReducer,
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
