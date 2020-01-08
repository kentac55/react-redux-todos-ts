import { combineReducers } from 'redux'
import { todoReducer } from './todos'
import { visibilityFilterReducer } from './visibilityFilters'
import { initReducer } from './init'

export default combineReducers({
  init: initReducer,
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
})
