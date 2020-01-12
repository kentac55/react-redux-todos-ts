import { combineReducers } from 'redux'
import { todoReducer } from './todos'
import { visibilityFilterReducer } from './visibilityFilters'

export default combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
})
