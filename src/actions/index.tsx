import {
  TodoActionType,
  ToggleAction,
  TodoAction,
  VisibilityFilterAction,
  VisibilityFilterType,
  VisibilityFilterKinds,
} from '../types'
let nextTodoId = 0

export const addTodo = (text: string): TodoAction => ({
  type: TodoActionType.ADD,
  id: nextTodoId++,
  text,
})

export const setVisibilityFilter = (
  filter: VisibilityFilterKinds
): VisibilityFilterAction => ({
  type: VisibilityFilterType.SET,
  filter,
})

export const toggleTodo = (id: number): ToggleAction => ({
  type: TodoActionType.TOGGLE,
  id,
})
