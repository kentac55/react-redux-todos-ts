import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { LinkView } from './Link'

it('renders LinkView with active and never fire an event', () => {
  const isActive = true
  const dispatcher = jest.fn()
  const label = 'hoge'
  const { getByLabelText } = render(
    <LinkView active={isActive} onClick={dispatcher} label={label} />
  )

  expect(getByLabelText('show-hoge').textContent).toBe(label)
  expect(getByLabelText('show-hoge')).toBeDisabled()
  expect(dispatcher).toHaveBeenCalledTimes(0)
  fireEvent.click(getByLabelText('show-hoge'))
  expect(getByLabelText('show-hoge')).toBeDisabled()
  expect(dispatcher).toHaveBeenCalledTimes(0)
})

it('renders LinkView with inactive and fire an event', () => {
  const isActive = false
  const dispatcher = jest.fn()
  const label = 'hoge'
  const { getByLabelText } = render(
    <LinkView active={isActive} onClick={dispatcher} label={label} />
  )

  expect(getByLabelText('show-hoge').textContent).toBe(label)
  expect(getByLabelText('show-hoge')).not.toBeDisabled()
  expect(dispatcher).toHaveBeenCalledTimes(0)
  fireEvent.click(getByLabelText('show-hoge'))
  expect(getByLabelText('show-hoge')).not.toBeDisabled()
  expect(dispatcher).toHaveBeenCalledTimes(1)
})
