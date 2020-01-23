import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TodoView } from './Todo'

it('renders TodoView', () => {
  const dispatcher = jest.fn()
  const { getByText } = render(
    <TodoView onClick={dispatcher} text="someText" completed={true} />
  )

  expect(getByText('someText'))
  expect(dispatcher).toHaveBeenCalledTimes(0)
  fireEvent.click(getByText('someText'))
  expect(dispatcher).toHaveBeenCalledTimes(1)
})
