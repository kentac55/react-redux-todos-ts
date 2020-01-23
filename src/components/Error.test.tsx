import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ErrorView } from './Error'

it('renders ErrorView without a message', () => {
  const { getByLabelText } = render(
    <ErrorView type="someError" message={null} />
  )

  expect(getByLabelText('error page title').textContent).toBe(
    'Welcome to Error Page🤗'
  )
  expect(getByLabelText('error type').textContent).toBe('someError')
  expect(() => getByLabelText('error message')).toThrow()
})

it('renders ErrorView with a message', () => {
  const { getByLabelText } = render(
    <ErrorView type="someError" message="someMessage" />
  )

  expect(getByLabelText('error page title').textContent).toBe(
    'Welcome to Error Page🤗'
  )
  expect(getByLabelText('error type').textContent).toBe('someError')
  expect(getByLabelText('error message').textContent).toBe('someMessage')
})
