import React from 'react'
import { LinkContainer } from '../containers/Link'

export const Footer: React.FC = () => (
  <div>
    <span>Show: </span>
    <LinkContainer filter={'SHOW_ALL'} label="all" />
    <LinkContainer filter={'SHOW_ACTIVE'} label="active" />
    <LinkContainer filter={'SHOW_COMPLETED'} label="completed" />
  </div>
)
