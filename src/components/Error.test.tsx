import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { ErrorView } from './Error'

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

it('renders ErrorView without a message', () => {
  act(() => {
    render(<ErrorView type="someError" message={null} />, container)
  })
  expect(container?.querySelector('div')?.textContent).toBe(
    'Welcome to Error Page🤗'
  )
  expect(container?.querySelector('pre')?.textContent).toBe('someError')
})

it('renders ErrorView with a message', () => {
  act(() => {
    render(<ErrorView type="someError" message="someMessage" />, container)
  })
  expect(container?.querySelector('div')?.textContent).toMatch(
    'Welcome to Error Page🤗'
  )
  expect(container?.querySelectorAll('pre')[0].textContent).toBe('someError')
  expect(container?.querySelectorAll('pre')[1].textContent).toBe('someMessage')
})
