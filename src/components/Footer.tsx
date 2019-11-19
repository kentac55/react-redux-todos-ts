import React from 'react'
import { LinkContainer } from '../containers/Link'
import { VisibilityFilterKinds } from '../types'

export const Footer: React.FC = () => (
  <div>
    <span>Show: </span>
    <LinkContainer filter={VisibilityFilterKinds.ALL}>
      <p>All</p>
    </LinkContainer>
    <LinkContainer filter={VisibilityFilterKinds.ACTIVE}>
      <p>Active</p>
    </LinkContainer>
    <LinkContainer filter={VisibilityFilterKinds.COMPLETED}>
      <p>Completed</p>
    </LinkContainer>
  </div>
)
