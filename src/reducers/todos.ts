import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Todo } from '../types'
import { addTodoEv, initEv, getTodosEv, toggleTodoEv } from '../actions'

type TodoState = {
  todos: Todo[]
}

export const todoReducer = reducerWithInitialState({ todos: [] } as TodoState)
  .case(initEv.done, (_, { result }) => {
    if (result.type === 'Ok') {
      return { todos: result.contents }
    } else {
      return { todos: [] }
    }
  })
  .case(addTodoEv.done, (state, { result }) => {
    if (result.type === 'Ok') {
      return { todos: [...state.todos, result.contents] }
    } else {
      return state
    }
  })
  .case(toggleTodoEv.done, (state, { result }) => {
    if (result.type === 'Ok') {
      return {
        todos: state.todos.map(todo => {
          return todo.id === result.contents.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        }),
      }
    } else {
      return state
    }
  })
  .case(getTodosEv.done, (_, { result }) => {
    if (result.type === 'Ok') {
      return { todos: result.contents }
    } else {
      return { todos: [] }
    }
  })
