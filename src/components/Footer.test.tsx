import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Footer } from './Footer'

jest.mock('../containers/Link')

it('renders Footer', () => {
  const { container } = render(<Footer />)

  expect(container.querySelectorAll('div>div>label')[0].textContent).toBe('all')
  expect(container.querySelectorAll('div>div>p')[0].textContent).toBe(
    'SHOW_ALL'
  )
  expect(container.querySelectorAll('div>div>label')[1].textContent).toBe(
    'active'
  )
  expect(container.querySelectorAll('div>div>p')[1].textContent).toBe(
    'SHOW_ACTIVE'
  )
  expect(container.querySelectorAll('div>div>label')[2].textContent).toBe(
    'completed'
  )
  expect(container.querySelectorAll('div>div>p')[2].textContent).toBe(
    'SHOW_COMPLETED'
  )
})
