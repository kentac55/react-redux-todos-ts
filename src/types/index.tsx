export enum TodoActionType {
  ADD = 'ADD_TODO',
  TOGGLE = 'TOGGLE_TODO',
}

export type TodoAction = {
  id: number
  type: TodoActionType
  text: string
}

export type ToggleAction = {
  id: number
  type: TodoActionType.TOGGLE
}

export type Todo = {
  id: number
  completed: boolean
  text: string
}

export enum VisibilityFilterType {
  SET = 'SET_VISIBILITY_FILTER',
}

export type VisibilityFilterAction = {
  type: VisibilityFilterType
  filter: VisibilityFilterKinds
}

export enum VisibilityFilterKinds {
  ALL = 'SHOW_ALL',
  COMPLETED = 'SHOW_COMPLETED',
  ACTIVE = 'SHOW_ACTIVE',
}
