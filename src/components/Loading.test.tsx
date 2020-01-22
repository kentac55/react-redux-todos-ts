import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { LoadingView } from './Loading'

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
    render(<LoadingView />, container)
  })
  expect(container?.querySelector('div')?.textContent).toBe('loading...')
})
