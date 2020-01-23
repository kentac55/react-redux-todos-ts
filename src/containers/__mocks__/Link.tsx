import React from 'react'
import { VisibilityFilter } from '../../types'

type LinkContainerProps = {
  label: string
  filter: VisibilityFilter
}

export const LinkContainer: React.FC<LinkContainerProps> = ({
  label,
  filter,
}) => {
  return (
    <div>
      <label>{label}</label>
      <p>{filter}</p>
    </div>
  )
}
