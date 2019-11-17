import React from 'react'
import { LinkView } from '../components/Link'
import { VisibilityFilterKinds } from '../types'

export const Footer: React.FC = () => (
  <div>
    <span>Show: </span>
    <LinkView filter={VisibilityFilterKinds.ALL}>
      <p>All</p>
    </LinkView>
    <LinkView filter={VisibilityFilterKinds.ACTIVE}>
      <p>Active</p>
    </LinkView>
    <LinkView filter={VisibilityFilterKinds.COMPLETED}>
      <p>Completed</p>
    </LinkView>
  </div>
)
