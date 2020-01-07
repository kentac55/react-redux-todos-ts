import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initAction } from '../actions'

export type InitState = {
  loading: boolean
  loaded: boolean
  error: Error | null
}

const initState: InitState = {
  loading: false,
  loaded: false,
  error: null,
}

export const initReducer = reducerWithInitialState(initState)
  .case(initAction.started, state => {
    return { ...state, loading: true }
  })
  .case(initAction.done, state => {
    console.log('reducer-init-done')
    return { ...state, loading: false, loaded: false }
  })
  .case(initAction.failed, (_, { error }) => {
    return { loading: false, loaded: false, error: error.error }
  })
