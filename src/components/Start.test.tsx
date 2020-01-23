import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { StartView } from './Start'

it('renders starting message propertly and fire dispatcher', () => {
  const dispatcher = jest.fn()
  const { getByText } = render(<StartView loadDispatcher={dispatcher} />)
  expect(getByText('starting...'))
  expect(dispatcher).toHaveBeenCalledTimes(1)
})
