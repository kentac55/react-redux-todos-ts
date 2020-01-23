import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { LoadingView } from './Loading'

it('renders loading message properly', () => {
  const { getByText } = render(<LoadingView />)

  expect(getByText('loading...'))
})
