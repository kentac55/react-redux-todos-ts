import { createStore } from 'redux'
import { appSelector, filterSelector, todoSelector } from '.'
import { VisibilityFilter } from '../types'
import { rootReducer } from './../reducers/index'

const storeState = createStore(rootReducer).getState()

it('should return application state', () => {
  expect(appSelector(storeState)).toMatchSnapshot()
})

it('should return filter state', () => {
  expect(filterSelector(storeState)).toMatchSnapshot()
})

it('should return todo state', () => {
  expect(todoSelector(storeState)).toMatchSnapshot()
})

const todos = [
  { id: 0, text: 'hoge', completed: false },
  { id: 1, text: 'fuga', completed: true },
  { id: 2, text: 'piyo', completed: false },
]
const todoState = { todos }
type VisibilityFilterState = {
  visibilityFilter: VisibilityFilter
}

it('should return all todos', () => {
  const visibilityFilterState: VisibilityFilterState = {
    visibilityFilter: 'SHOW_ALL',
  }

  expect(todoSelector.resultFunc(todoState, visibilityFilterState)).toBe(todos)
})

it('shoudl return completed todos', () => {
  const visibilityFilterState: VisibilityFilterState = {
    visibilityFilter: 'SHOW_COMPLETED',
  }
  expect(
    todoSelector.resultFunc(todoState, visibilityFilterState)
  ).toStrictEqual([todos[1]])
})

it('shoudl return active todos', () => {
  const visibilityFilterState: VisibilityFilterState = {
    visibilityFilter: 'SHOW_ACTIVE',
  }
  expect(
    todoSelector.resultFunc(todoState, visibilityFilterState)
  ).toStrictEqual([todos[0], todos[2]])
})
