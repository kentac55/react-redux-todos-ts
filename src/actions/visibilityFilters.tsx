import { VisibilityFilterKinds } from '../types'

export const setVisibilityFilterAction = (filter: VisibilityFilterKinds) =>
  ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  } as const)
