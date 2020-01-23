import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppView } from '../components/App'

jest.mock('../containers/AddTodo')
jest.mock('../containers/TodoList')
jest.mock('./Footer')

it('renders AppView', () => {
  const { container } = render(<AppView />)

  expect(container.querySelectorAll('div>div>div')[0].textContent).toBe(
    'AddTodoContainer'
  )
  expect(container.querySelectorAll('div>div>div')[1].textContent).toBe(
    'TodoListContainer'
  )
  expect(container.querySelectorAll('div>div>div')[2].textContent).toBe(
    'Footer'
  )
})
