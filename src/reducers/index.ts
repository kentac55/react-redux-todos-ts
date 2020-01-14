import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { todoReducer } from './todos'
import { appReducer } from './app'
import { visibilityFilterReducer } from './visibilityFilters'

export const rootReducer = combineReducers({
  app: appReducer,
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
