import actionCreatorFactory from 'typescript-fsa'
import { AsyncOpResult, Todo, VisibilityFilter } from '../types'

const actionCreator = actionCreatorFactory()

type AddTodoProp = {
  text: string
}
export const addTodoOp = actionCreator<AddTodoProp>('AddTodoOp')
export const addTodoEv = actionCreator.async<
  AddTodoProp,
  AsyncOpResult<Todo>,
  Error
>('AddTodoEv')

type ToggleTodoProp = {
  todo: Todo
}
export const toggleTodoOp = actionCreator<ToggleTodoProp>('ToggleTodoOp')
export const toggleTodoEv = actionCreator.async<
  ToggleTodoProp,
  AsyncOpResult<Todo>,
  Error
>('ToggleTodoEv')

export const setVisibilityFilterAction = actionCreator<VisibilityFilter>('SET')

type GetTodoProp = {
  id: number
}
export const getTodoOp = actionCreator<GetTodoProp>('GetTodoOp')
export const getTodoEv = actionCreator.async<
  GetTodoProp,
  AsyncOpResult<Todo>,
  Error
>('GetTodoEv')

type GetTodosProp = void
export const getTodosOp = actionCreator<GetTodosProp>('GetTodosOp')
export const getTodosEv = actionCreator.async<
  GetTodosProp,
  AsyncOpResult<Todo[]>,
  Error
>('GetTogosEv')

type InitProp = void
export const initOp = actionCreator<InitProp>('Init')
export const initEv = actionCreator.async<
  InitProp,
  AsyncOpResult<Todo[]>,
  Error
>('InitEv')
