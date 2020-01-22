import React, { createRef } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { AddTodoView } from './AddTodo'

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
  const ref = createRef<HTMLInputElement>()
  act(() => {
    render(
      <AddTodoView
        dispatcher={(): void => {
          console.log('dummy')
        }}
        input={ref}
      />,
      container
    )
  })
  expect(container?.querySelector('div>form>button')?.textContent).toBe(
    'Add Todo'
  )
})
