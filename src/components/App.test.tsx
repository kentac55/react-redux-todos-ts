import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { AppView } from '../components/App'

jest.mock('../containers/AddTodo')
jest.mock('../containers/TodoList')
jest.mock('./Footer')

let container: Element | null = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.append(container)
})

afterEach(() => {
  container && unmountComponentAtNode(container)
  container?.remove()
  container = null
})

it('renders AppView', () => {
  act(() => {
    render(<AppView />, container)
  })
  expect(container?.querySelectorAll('div>div>div')[0].textContent).toBe(
    'AddTodoContainer'
  )
  expect(container?.querySelectorAll('div>div>div')[1].textContent).toBe(
    'TodoListContainer'
  )
  expect(container?.querySelectorAll('div>div>div')[2].textContent).toBe(
    'Footer'
  )
})
