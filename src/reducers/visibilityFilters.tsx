import { Reducer } from 'redux'

import { VisibilityFilterAction, VisibilityFilterKinds } from '../types'

export const visibilityFilter: Reducer<
  VisibilityFilterKinds,
  VisibilityFilterAction
> = (
  state = VisibilityFilterKinds.ALL,
  action: VisibilityFilterAction
): VisibilityFilterKinds => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
