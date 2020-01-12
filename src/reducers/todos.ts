import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Todo } from '../types'
import { addTodoEv, initEv, getTodosEv, toggleTodoEv } from '../actions'

export const todoReducer = reducerWithInitialState([] as Todo[])
  .case(initEv.done, (_, { result }) => {
    if (result.type === 'Ok') {
      return result.contents
    } else {
      return []
    }
  })
  .case(addTodoEv.done, (state, { result }) => {
    if (result.type === 'Ok') {
      return [...state, result.contents]
    } else {
      return state
    }
  })
  .case(toggleTodoEv.done, (state, { result }) => {
    if (result.type === 'Ok') {
      return state.map(todo => {
        return todo.id === result.contents.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      })
    } else {
      return state
    }
  })
  .case(getTodosEv.done, (_, { result }) => {
    if (result.type === 'Ok') {
      return result.contents
    } else {
      return []
    }
  })
