import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { StartView } from './Start'

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
      <StartView
        loadDispatcher={(): void => {
          console.log('dummy')
        }}
        loaded={false}
      />,
      container
    )
  })
  expect(container?.querySelector('div')?.textContent).toBe('starting...')
})
