import React from 'react'
import { LinkContainer } from '../containers/Link'

export const Footer: React.FC = () => (
  <div>
    <span>Show: </span>
    <LinkContainer filter={'SHOW_ALL'}>
      <p>All</p>
    </LinkContainer>
    <LinkContainer filter={'SHOW_ACTIVE'}>
      <p>Active</p>
    </LinkContainer>
    <LinkContainer filter={'SHOW_COMPLETED'}>
      <p>Completed</p>
    </LinkContainer>
  </div>
)
