import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { TodoView } from './Todo'

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

it('renders TodoView', () => {
  act(() => {
    render(
      <TodoView
        onClick={(): void => {
          console.log('dummy')
        }}
        text="someText"
        completed={true}
      />,
      container
    )
  })
  expect(container?.querySelector('li')?.textContent).toBe('someText')
})
