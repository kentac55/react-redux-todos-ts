import { VisibilityFilter } from '../types'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { setVisibilityFilterAction } from '../actions'

type VisibilityFilterState = {
  visibilityFilter: VisibilityFilter
}

export const visibilityFilterReducer = reducerWithInitialState({
  visibilityFilter: 'SHOW_ALL',
} as VisibilityFilterState).case(setVisibilityFilterAction, (_, filter) => {
  return { visibilityFilter: filter }
})
