import { AnyAction } from 'redux'
import * as todoActions from '../actions/todos'
import * as visibilityFilterActions from '../actions/visibilityFilters'

export type ActionsType<ActionCreators extends object> = {
  [Key in keyof ActionCreators]: ActionCreators[Key] extends (
    ...args: any[]
  ) => AnyAction
    ? ReturnType<ActionCreators[Key]>
    : never
}

export type ActionType<
  ActionCreators extends object,
  Actions = ActionsType<ActionCreators>
> = { [Key in keyof Actions]: Actions[Key] }[keyof Actions]

export type Todo = {
  id: number
  completed: boolean
  text: string
}

export enum VisibilityFilterKinds {
  ALL = 'SHOW_ALL',
  COMPLETED = 'SHOW_COMPLETED',
  ACTIVE = 'SHOW_ACTIVE',
}

export type TodoAction = ActionType<typeof todoActions>
export type VisibilityFilterAction = ActionType<typeof visibilityFilterActions>
