import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { TodoListView } from './TodoList'

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

it('renders TodoListView', () => {
  const todos = [
    { id: 0, completed: false, text: 'hoge' },
    { id: 1, completed: true, text: 'fuga' },
    { id: 2, completed: false, text: 'piyo' },
  ]
  act(() => {
    render(
      <TodoListView
        dispatcher={(): void => {
          console.log('dummy')
        }}
        todos={todos}
      />,
      container
    )
  })
  expect(container?.querySelectorAll('ul>li').length).toBe(3)
  expect(container?.querySelectorAll('ul>li')[0].getAttribute('style')).toBe(
    'text-decoration: none;'
  )
  expect(container?.querySelectorAll('ul>li')[0].textContent).toBe('hoge')
  expect(container?.querySelectorAll('ul>li')[1].getAttribute('style')).toBe(
    'text-decoration: line-through;'
  )
  expect(container?.querySelectorAll('ul>li')[1].textContent).toBe('fuga')
  expect(container?.querySelectorAll('ul>li')[2].getAttribute('style')).toBe(
    'text-decoration: none;'
  )
  expect(container?.querySelectorAll('ul>li')[2].textContent).toBe('piyo')
})
