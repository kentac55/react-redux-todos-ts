import React from 'react'
import { createSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import { initOp } from '../actions'
import { InitView } from '../components/init'

export type InitState = {
  loading: boolean
  loaded: boolean
  error: Error | null
}

const initSelector = createSelector(
  (state: { init: InitState }) => state.init,
  init => init
)

export const InitContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, loaded, error } = useSelector(initSelector)
  const loadDispatcher = (): void => {
    dispatch(initOp())
  }
  return (
    <InitView
      loading={loading}
      loaded={loaded}
      error={error}
      loadDispatcher={loadDispatcher}
    />
  )
}
