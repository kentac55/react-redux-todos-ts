import React from 'react'
import { useDispatch } from 'react-redux'
import { initApp } from '../actions'
import { AppView } from '../components/App'
import { useTypedSelector } from '../reducers'
import { appSelector } from '../selectors'

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, loaded, error } = useTypedSelector(appSelector)
  const loadDispatcher = (): void => {
    dispatch(initApp.started())
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
