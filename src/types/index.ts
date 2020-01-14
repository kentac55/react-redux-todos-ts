export type Todo = {
  id: number
} & NewTodo

export type NewTodo = {
  completed: boolean
  text: string
}

export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

type AsyncOpOkType = 'Ok'

type AsyncOpNgType =
  | 'Unknown'
  | 'InvalidArgument'
  | 'NotFound'
  | 'AlreadyExists'
  | 'PermissionDenied'
  | 'Unauthenticated'
  | 'Internal'
  | 'Unavailable'

export type AsyncOpResult<T, U = string> = AsyncOpOk<T> | AsyncOpNg<U>

type AsyncOpOk<T> = {
  type: AsyncOpOkType
  contents: T
}

type AsyncOpNg<T = string> = {
  type: AsyncOpNgType
  message: T | null
}
