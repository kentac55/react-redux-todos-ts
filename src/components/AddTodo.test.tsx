import React, { createRef } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AddTodoView } from './AddTodo'

it('renders TodoView and dispatch event with valid string', () => {
  const dispatcher = jest.fn()
  const ref = createRef<HTMLInputElement>()
  const { getByText, getByLabelText } = render(
    <AddTodoView dispatcher={dispatcher} input={ref} />
  )

  fireEvent.change(getByLabelText('new todo content'), {
    target: { value: 'hoge' },
  })
  expect(ref.current?.value).toBe('hoge')
  fireEvent.click(getByText('Add Todo'))
  expect(dispatcher).toHaveBeenCalledTimes(1)
  expect(dispatcher).toHaveBeenCalledWith('hoge')
  expect(ref.current?.value).toBe('')
})

it('renders TodoView and dont dispatch event with empty string', () => {
  const dispatcher = jest.fn()
  const ref = createRef<HTMLInputElement>()
  const { getByText } = render(
    <AddTodoView dispatcher={dispatcher} input={ref} />
  )

  expect(ref.current?.value).toBe('')
  fireEvent.click(getByText('Add Todo'))
  expect(dispatcher).toHaveBeenCalledTimes(0)
  expect(ref.current?.value).toBe('')
})
