import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Todo } from '../types'
import { getId } from '../repository'
import { addTodoAction, toggleTodoAction } from '../actions'

export const todoReducer = reducerWithInitialState([] as Todo[])
  .case(addTodoAction, (state, text) => {
    return [...state, { id: getId(), text, completed: false }]
  })
  .case(toggleTodoAction, (state, id) => {
    return state.map(todo => {
      return todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    })
  })
