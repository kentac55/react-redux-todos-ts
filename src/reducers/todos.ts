import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Todo } from '../types'
import { addTodo, initApp, getTodos, toggleTodo } from '../actions'

type TodoState = {
  todos: Todo[]
}

export const todoReducer = reducerWithInitialState({ todos: [] } as TodoState)
  .case(initApp.done, (_, { result }) => {
    if (result.type === 'Ok') {
      return { todos: result.contents }
    } else {
      return { todos: [] }
    }
  })
  .case(addTodo.done, (state, { result }) => {
    if (result.type === 'Ok') {
      return { todos: [...state.todos, result.contents] }
    } else {
      return state
    }
  })
  .case(toggleTodo.done, (state, { result }) => {
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
  .case(getTodos.done, (_, { result }) => {
    if (result.type === 'Ok') {
      return { todos: result.contents }
    } else {
      return { todos: [] }
    }
  })
