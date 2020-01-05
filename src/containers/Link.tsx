import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibilityFilterAction } from '../actions'
import { VisibilityFilterKinds } from '../types'
import { LinkView } from '../components/Link'

type FilterState = { visibilityFilter: VisibilityFilterKinds }

const filterSelector = ({
  visibilityFilter,
}: FilterState): VisibilityFilterKinds => visibilityFilter

type LinkContainerProps = {
  children: JSX.Element
  filter: VisibilityFilterKinds
}

export const LinkContainer: React.FC<LinkContainerProps> = ({
  children,
  filter,
}) => {
  const active = useSelector(filterSelector) === filter
  const dispatch = useDispatch()
  const onClick = (): void => {
    dispatch(setVisibilityFilterAction(filter))
  }
  return (
    <LinkView active={active} onClick={onClick}>
      {children}
    </LinkView>
  )
}