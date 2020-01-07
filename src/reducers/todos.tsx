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
