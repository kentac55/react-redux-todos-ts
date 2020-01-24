import { Action } from 'redux'
import {
  visibilityFilterReducer,
  VisibilityFilterState,
} from './visibilityFilters'
import { setVisibilityFilter } from '../actions'

const all = {
  visibilityFilter: 'SHOW_ALL',
} as const
const completed = {
  visibilityFilter: 'SHOW_COMPLETED',
} as const
const active = {
  visibilityFilter: 'SHOW_ACTIVE',
} as const
const init = all

it('should return initial state', () => {
  expect(visibilityFilterReducer(undefined, { type: undefined })).toEqual(init)
  expect(
    visibilityFilterReducer(undefined, { type: undefined })
  ).toMatchSnapshot()
})

it.each<[Action, VisibilityFilterState]>([
  [setVisibilityFilter('SHOW_ALL'), all],
  [setVisibilityFilter('SHOW_COMPLETED'), completed],
  [setVisibilityFilter('SHOW_ACTIVE'), active],
])('should handle %s', (action, expectedState) => {
  expect(visibilityFilterReducer(init, action)).toStrictEqual(expectedState)
  expect(visibilityFilterReducer(init, action)).toMatchSnapshot()
})
