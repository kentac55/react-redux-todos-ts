import actionCreatorFactory, { Action as FSA } from 'typescript-fsa'
import { VisibilityFilterKinds } from '../types'
import { Todo } from '../types'

const actionCreator = actionCreatorFactory('saga')

export const addTodoOp = actionCreator<{ text: string }>('AddTodoOp')
export const addTodoAction = actionCreator.async<
  { text: string },
  { todo: Todo }
>('ADD')
export const addTodoSucceeded = actionCreator<{ todo: Todo }>(
  'AddTodoSucceeded'
)

export const toggleTodoOp = actionCreator<{ todo: Todo }>('ToggleTodo')
export const toggleTodoAction = actionCreator.async<
  { todo: Todo },
  { todo: Todo }
>('TOGGLE')
export const toggleTodoSucceeded = actionCreator<{ todo: Todo }>(
  'ToggleTodoSucceeded'
)

export const setVisibilityFilterAction = actionCreator<VisibilityFilterKinds>(
  'SET'
)

export const getTodoOp = actionCreator<void>('GetTodoOp')
export const getTodoAction = actionCreator.async<
  { id: number },
  { todo: Todo }
>('GET')
export const getTodoSucceeded = actionCreator<{ todo: Todo }>(
  'GetTodoSucceeded'
)

export const getTodosOp = actionCreator<void>('GetTodosOp')
export const getTodosAction = actionCreator.async<{}, { todos: Todo[] }>(
  'GETALL'
)
export const getTodosSucceeded = actionCreator<{ todos: Todo[] }>(
  'GetTodosSucceeded'
)

export const fetchSagaFailed = actionCreator<{ e: Error }>('fetchSagaFailed')
