import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { addTodo, initApp, getTodo, getTodos, toggleTodo } from '../actions'
import { AsyncOpResult } from '../types'

export type AppState = {
  loading: boolean
  loaded: boolean
  error: {
    type: string
    message: string | null
  } | null
}

const failedHandler = (_: unknown, { error }: { error: Error }): AppState => {
  return {
    loaded: true,
    loading: false,
    error: { type: error.name, message: error.message },
  }
}
const doneHandler = (
  state: AppState,
  { result }: { result: AsyncOpResult<unknown> }
): AppState => {
  if (result.type === 'Ok') {
    return {
      ...state,
      loaded: true,
      loading: false,
    }
  } else {
    return {
      loaded: true,
      loading: false,
      error: { type: result.type, message: result.message },
    }
  }
}
const startedHandler = (state: AppState): AppState => {
  return { ...state, loading: true }
}

export const appReducer = reducerWithInitialState({
  loaded: false,
  loading: false,
  error: null,
} as AppState)
  .cases(
    [addTodo.started, getTodo.started, initApp.started, toggleTodo.started],
    startedHandler
  )
  .case(getTodos.started, startedHandler)
  .cases(
    [addTodo.failed, getTodo.failed, initApp.failed, toggleTodo.failed],
    failedHandler
  )
  .case(getTodos.failed, failedHandler)
  .cases(
    [addTodo.done, getTodo.done, initApp.done, toggleTodo.done],
    doneHandler
  )
  .case(getTodos.done, doneHandler)
