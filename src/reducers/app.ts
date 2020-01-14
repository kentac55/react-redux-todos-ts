import { reducerWithInitialState } from 'typescript-fsa-reducers'
import {
  addTodoEv,
  initEv,
  getTodoEv,
  getTodosEv,
  toggleTodoEv,
} from '../actions'
import { AsyncOpResult } from '../types'

type AppState = {
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
    [
      addTodoEv.started,
      getTodoEv.started,
      initEv.started,
      toggleTodoEv.started,
    ],
    startedHandler
  )
  .case(getTodosEv.started, startedHandler)
  .cases(
    [addTodoEv.failed, getTodoEv.failed, initEv.failed, toggleTodoEv.failed],
    failedHandler
  )
  .case(getTodosEv.failed, failedHandler)
  .cases(
    [addTodoEv.done, getTodoEv.done, initEv.done, toggleTodoEv.done],
    doneHandler
  )
  .case(getTodosEv.done, doneHandler)
