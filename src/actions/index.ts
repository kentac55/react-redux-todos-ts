import actionCreatorFactory from 'typescript-fsa'
import { AsyncOpResult, Todo, VisibilityFilter } from '../types'

const actionCreator = actionCreatorFactory()

type AddTodoProp = {
  text: string
}
export const addTodo = actionCreator.async<
  AddTodoProp,
  AsyncOpResult<Todo>,
  Error
>('AddTodo')

type ToggleTodoProp = {
  todo: Todo
}
export const toggleTodo = actionCreator.async<
  ToggleTodoProp,
  AsyncOpResult<Todo>,
  Error
>('ToggleTodo')

export const setVisibilityFilter = actionCreator<VisibilityFilter>(
  'SetVisibilityFilter'
)

type GetTodoProp = {
  id: number
}
export const getTodo = actionCreator.async<
  GetTodoProp,
  AsyncOpResult<Todo>,
  Error
>('GetTodo')

type GetTodosProp = void
export const getTodos = actionCreator.async<
  GetTodosProp,
  AsyncOpResult<Todo[]>,
  Error
>('GetTogos')

type InitProp = void
export const initApp = actionCreator.async<
  InitProp,
  AsyncOpResult<Todo[]>,
  Error
>('InitApp')
