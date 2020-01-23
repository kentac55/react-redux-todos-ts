import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TodoListView } from './TodoList'

it('renders TodoListView', () => {
  const dispatcher = jest.fn()
  const todos = [
    { id: 0, completed: false, text: 'hoge' },
    { id: 1, completed: true, text: 'fuga' },
    { id: 2, completed: false, text: 'piyo' },
  ]
  const { getByText, container } = render(
    <TodoListView dispatcher={dispatcher} todos={todos} />
  )

  expect(container.querySelectorAll('ul>li').length).toBe(3)
  expect(getByText('hoge').getAttribute('style')).toBe('text-decoration: none;')
  expect(getByText('fuga').getAttribute('style')).toBe(
    'text-decoration: line-through;'
  )
  expect(getByText('piyo').getAttribute('style')).toBe('text-decoration: none;')
  expect(dispatcher).toHaveBeenCalledTimes(0)
  fireEvent.click(getByText('hoge'))
  expect(dispatcher).toHaveBeenCalledWith(todos[0])
  expect(dispatcher).toHaveBeenCalledTimes(1)
})
