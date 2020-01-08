import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Todo } from '../types'
import {
  initAction,
  getTodosAction,
  addTodoAction,
  toggleTodoAction,
} from '../actions'

export const todoReducer = reducerWithInitialState([] as Todo[])
  .case(initAction.done, (_, { result: { todos } }) => {
    return todos
  })
  .case(getTodosAction.done, (_, { result: { todos } }) => {
    return todos
  })
  .case(addTodoAction.done, (state, { result: { todo } }) => {
    return [...state, todo]
  })
  .case(toggleTodoAction.done, (state, { result: { todo } }) => {
    return state.map(t => {
      return t.id === todo.id
        ? {
            ...todo,
            completed: todo.completed,
          }
        : t
    })
  })
  .case(toggleTodoAction.failed, (_, { error }) => {
    if (error.response?.status === 404) {
      return [{ id: -1, text: 'cannot find', completed: false }]
    } else if (error.response) {
      return [{ id: -1, text: 'unknown error', completed: false }]
    } else if (error.request) {
      return [{ id: -1, text: 'connection error', completed: false }]
    } else {
      return [{ id: -1, text: error.message, completed: false }]
    }
  })
