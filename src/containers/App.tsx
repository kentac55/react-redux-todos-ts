import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { initOp } from '../actions'
import { AppView } from '../components/App'

export type AppState = {
  loading: boolean
  loaded: boolean
  error: {
    type: string
    message: string | null
  } | null
}

/* const appSelector = ({ app }: { app: AppState }): AppState => app */
const appSelector = createSelector(
  (state: { app: AppState }) => state.app,
  app => app
)

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, loaded, error } = useSelector(appSelector)
  const loadDispatcher = (): void => {
    dispatch(initOp())
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
