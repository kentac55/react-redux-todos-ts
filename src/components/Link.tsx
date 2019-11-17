import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibilityFilterAction } from '../actions'
import { VisibilityFilterKinds } from '../types'

type LinkViewProps = {
  children: JSX.Element
  filter: VisibilityFilterKinds
}

type FilterState = { visibilityFilter: VisibilityFilterKinds }

const filterSelector = ({
  visibilityFilter,
}: FilterState): VisibilityFilterKinds => visibilityFilter

export const LinkView: React.FC<LinkViewProps> = ({ children, filter }) => {
  const dispatch = useDispatch()
  const active = useSelector(filterSelector) === filter
  return (
    <button
      onClick={(): void => {
        dispatch(setVisibilityFilterAction(filter))
      }}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  )
}
