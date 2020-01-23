import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { initApp } from '../actions'
import { useTypedSelector } from '../hooks'
import { appSelector } from '../selectors'
import { AppView } from '../components/App'
import { ErrorView } from '../components/Error'
import { StartView } from '../components/Start'
import { LoadingView } from '../components/Loading'

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, loaded, error } = useTypedSelector(appSelector)
  const loadDispatcher = useCallback((): void => {
    dispatch(initApp.started())
  }, [dispatch])

  if (!loading && !loaded) {
    return <StartView loadDispatcher={loadDispatcher} />
  }
  if (loading) {
    return <LoadingView />
  }
  if (error) {
    return <ErrorView {...error} />
  }
  return <AppView />
}
