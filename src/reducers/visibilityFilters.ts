import { VisibilityFilter } from '../types'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { setVisibilityFilter } from '../actions'

export type VisibilityFilterState = {
  visibilityFilter: VisibilityFilter
}

export const visibilityFilterReducer = reducerWithInitialState({
  visibilityFilter: 'SHOW_ALL',
} as VisibilityFilterState).case(setVisibilityFilter, (_, filter) => {
  return { visibilityFilter: filter }
})
