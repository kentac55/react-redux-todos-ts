import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilterKinds } from '../types'

export const Footer: React.FC = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilterKinds.ALL}>
      <p>All</p>
    </FilterLink>
    <FilterLink filter={VisibilityFilterKinds.ACTIVE}>
      <p>Active</p>
    </FilterLink>
    <FilterLink filter={VisibilityFilterKinds.COMPLETED}>
      <p>Completed</p>
    </FilterLink>
  </div>
)
