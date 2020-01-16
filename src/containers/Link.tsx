import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { LinkView } from '../components/Link'
import { filterSelector } from '../selectors'
import { VisibilityFilter } from '../types'
import { useTypedSelector } from '../hooks'

type LinkContainerProps = {
  children: JSX.Element
  filter: VisibilityFilter
}

export const LinkContainer: React.FC<LinkContainerProps> = ({
  children,
  filter,
}) => {
  const active = useTypedSelector(filterSelector) === filter
  const dispatch = useDispatch()
  const onClick = useCallback((): void => {
    dispatch(setVisibilityFilter(filter))
  }, [filter])
  return (
    <LinkView active={active} onClick={onClick}>
      {children}
    </LinkView>
  )
}
