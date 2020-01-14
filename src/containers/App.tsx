import React from 'react'
import { useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { initEv } from '../actions'
import { AppView } from '../components/App'
import { useTypedSelector, RootState } from '../reducers'

const appSelector = createSelector(
  (state: RootState) => state.app,
  app => app
)

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, loaded, error } = useTypedSelector(appSelector)
  const loadDispatcher = (): void => {
    dispatch(initEv.started())
  }
  return (
    <AppView
      loading={loading}
      loaded={loaded}
      error={error}
      loadDispatcher={loadDispatcher}
    />
  )
}
