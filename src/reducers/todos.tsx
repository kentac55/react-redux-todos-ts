import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Todo } from '../types'
import { addTodoSucceeded, toggleTodoSucceeded } from '../actions'

export const todoReducer = reducerWithInitialState([] as Todo[])
  .case(addTodoSucceeded, (state, { todo }) => {
    return [...state, todo]
  })
  .case(toggleTodoSucceeded, (state, { todo }) => {
    return state.map(t => {
      return t.id === todo.id
        ? {
            ...todo,
            completed: todo.completed,
          }
        : todo
    })
  })
