import {
  VisibilityFilterType,
  VisibilityFilterKinds,
  VisibilityFilterAction,
} from '../types'

export const visibilityFilter = (
  state = VisibilityFilterKinds.ALL,
  action: VisibilityFilterAction
): VisibilityFilterKinds => {
  switch (action.type) {
    case VisibilityFilterType.SET:
      return action.filter
    default:
      const _e: never = action.type
      return _e
  }
}
