import actionCreatorFactory from 'typescript-fsa'
import { VisibilityFilterKinds } from '../types'

const actionCreator = actionCreatorFactory()
export const addTodoAction = actionCreator<string>('ADD')
export const toggleTodoAction = actionCreator<number>('TOGGLE')

export const setVisibilityFilterAction = actionCreator<VisibilityFilterKinds>(
  'SET'
)
