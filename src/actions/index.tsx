import actionCreatorFactory from 'typescript-fsa'
import { AxiosError } from 'axios'
import { VisibilityFilterKinds } from '../types'
import { Todo } from '../types'

const actionCreator = actionCreatorFactory('saga')

type TodoResult = {
  todo: Todo
}
type TodosResult = {
  todos: Todo[]
}

type AddTodoProp = {
  text: string
}
export const addTodoOp = actionCreator<AddTodoProp>('AddTodoOp')
export const addTodoAction = actionCreator.async<
  AddTodoProp,
  TodoResult,
  AxiosError
>('AddTodo')

type ToggleTodoProp = {
  todo: Todo
}
export const toggleTodoOp = actionCreator<ToggleTodoProp>('ToggleTodoOp')
export const toggleTodoAction = actionCreator.async<
  ToggleTodoProp,
  TodoResult,
  AxiosError
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
  TodoResult,
  AxiosError
>('GetTodo')

export const getTodosOp = actionCreator('GetTodosOp')
export const getTodosAction = actionCreator.async<
  void,
  TodosResult,
  AxiosError
>('GetAll')

export const initOp = actionCreator('InitOp')
export const initAction = actionCreator.async<void, TodosResult, AxiosError>(
  'Init'
)
