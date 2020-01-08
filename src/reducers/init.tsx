import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initAction } from '../actions'
import { InitState } from '../containers/init'

export const initReducer = reducerWithInitialState({
  loading: false,
  loaded: false,
  error: null,
} as InitState)
  .case(initAction.started, state => {
    return { ...state, loading: true }
  })
  .case(initAction.done, state => {
    return { ...state, loading: false, loaded: true }
  })
  .case(initAction.failed, (_, { error }) => {
    return { loading: false, loaded: true, error: error }
  })
