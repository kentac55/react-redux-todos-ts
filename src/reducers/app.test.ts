import { Action } from 'redux'
import { appReducer, AppState } from './app'
import { addTodo, initApp, getTodo, getTodos, toggleTodo } from '../actions'

const id = 0
const text = 'hoge'
const todo = { id, text, completed: false }

const init = {
  loaded: false,
  loading: false,
  error: null,
}

const loadingState = {
  ...init,
  loading: true,
}

const error = Error('error')

const errorState = {
  ...init,
  loaded: true,
  error: { type: error.name, message: error.message },
}

const loadedState = {
  ...init,
  loaded: true,
  loading: false,
}

const serverError = { type: 'Internal', message: null } as const

it('should return initial state', () => {
  expect(appReducer(undefined, { type: undefined })).toEqual(init)
  expect(appReducer(undefined, { type: undefined })).toMatchSnapshot()
})

it.each<[Action, AppState]>([
  [addTodo.started({ text }), loadingState],
  [getTodo.started({ id }), loadingState],
  [initApp.started(), loadingState],
  [toggleTodo.started({ todo }), loadingState],
  [getTodos.started(), loadingState],
  [addTodo.failed({ params: { text }, error }), errorState],
  [getTodo.failed({ params: { id }, error }), errorState],
  [initApp.failed({ params: undefined, error }), errorState],
  [
    toggleTodo.failed({
      params: { todo },
      error,
    }),
    errorState,
  ],
  [getTodos.failed({ params: undefined, error }), errorState],
  [
    addTodo.done({
      params: { text },
      result: { type: 'Ok', contents: todo },
    }),
    loadedState,
  ],
  [
    getTodo.done({ params: { id }, result: { type: 'Ok', contents: todo } }),
    loadedState,
  ],
  [
    initApp.done({
      params: undefined,
      result: { type: 'Ok', contents: [todo] },
    }),
    loadedState,
  ],
  [
    toggleTodo.done({
      params: { todo },
      result: { type: 'Ok', contents: todo },
    }),
    loadedState,
  ],
  [
    getTodos.done({
      params: undefined,
      result: { type: 'Ok', contents: [todo] },
    }),
    loadedState,
  ],
  [
    addTodo.done({ params: { text }, result: serverError }),
    { loaded: true, loading: false, error: serverError },
  ],
])('should handle %s', (action, expectedState) => {
  expect(appReducer(init, action)).toEqual(expectedState)
  expect(appReducer(init, action)).toMatchSnapshot()
})
