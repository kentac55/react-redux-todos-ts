import actionCreatorFactory from 'typescript-fsa'
import { VisibilityFilterKinds } from '../types'
import { Todo } from '../types'

const actionCreator = actionCreatorFactory('saga')

type AddTodoProp = {
  text: string
}
export const addTodoOp = actionCreator<AddTodoProp>('AddTodoOp')
export const addTodoAction = actionCreator.async<
  AddTodoProp,
  { todo: Todo },
  { error: Error }
>('AddTodo')

type ToggleTodoProp = {
  todo: Todo
}
export const toggleTodoOp = actionCreator<ToggleTodoProp>('ToggleTodoOp')
export const toggleTodoAction = actionCreator.async<
  ToggleTodoProp,
  { todo: Todo },
  { error: Error }
>('ToggleTodo')

export const setVisibilityFilterAction = actionCreator<VisibilityFilterKinds>(
  'SET'
)

type getTodoProp = {
  id: number
}
export const getTodoOp = actionCreator<getTodoProp>('GetTodoOp')
export const getTodoAction = actionCreator.async<
  getTodoProp,
  { todo: Todo },
  { error: Error }
>('GetTodo')

export const getTodosOp = actionCreator('GetTodosOp')
export const getTodosAction = actionCreator.async<
  void,
  { todos: Todo[] },
  { error: Error }
>('GetAll')

export const initOp = actionCreator('InitOp')
export const initAction = actionCreator.async<
  void,
  { todos: Todo[] },
  { error: Error }
>('Init')
