import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { LinkView } from './Link'
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

it('renders LinkView with active', () => {
  const isActive = false
  const msg = 'hoge'
  act(() => {
    render(
      <LinkView
        active={isActive}
        onClick={(): void => {
          console.log('dummy')
        }}
      >
        <p>{msg}</p>
      </LinkView>,
      container
    )
  })
  expect(container?.querySelector('button')?.textContent).toBe(msg)
  expect(container?.querySelector('button')?.disabled).toBe(isActive)
})

it('renders LinkView with inactive', () => {
  const isActive = false
  const msg = 'hoge'
  act(() => {
    render(
      <LinkView
        active={isActive}
        onClick={(): void => {
          console.log('dummy')
        }}
      >
        <p>{msg}</p>
      </LinkView>,
      container
    )
  })
  expect(container?.querySelector('button')?.textContent).toBe(msg)
  expect(container?.querySelector('button')?.disabled).toBe(isActive)
})
