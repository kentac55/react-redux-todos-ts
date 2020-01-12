import { VisibilityFilterKinds } from '../types'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { setVisibilityFilterAction } from '../actions'

export const visibilityFilterReducer = reducerWithInitialState(
  VisibilityFilterKinds.ALL
).case(setVisibilityFilterAction, (_, filter) => {
  return filter
})
