import { combineReducers } from 'redux'
import { todoReducer } from './todos'
import { appReducer } from './app'
import { visibilityFilterReducer } from './visibilityFilters'

export default combineReducers({
  app: appReducer,
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
})
