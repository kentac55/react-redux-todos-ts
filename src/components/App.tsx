import React, { useEffect, useMemo } from 'react'
import { Footer } from './Footer'
import { TodoListContainer } from '../containers/TodoList'
import { AddTodoContainer } from '../containers/AddTodo'

type AppViewProps = {
  loading: boolean
  loaded: boolean
  error: ErrorViewProps | null
  loadDispatcher: () => void
}

type ErrorViewProps = {
  type: string
  message: string | null
}

const ErrorView: React.FC<ErrorViewProps> = ({ type, message }) => {
  return useMemo(() => {
    if (message) {
      return (
        <>
          <div>Welcome to Error Page🤗</div>
          <pre>{type}</pre>
          <pre>{message}</pre>
        </>
      )
    } else {
      return (
        <>
          <div>Welcome to Error Page🤗</div>
          <pre>{type}</pre>
        </>
      )
    }
  }, [type, message])
}

export const AppView: React.FC<AppViewProps> = ({
  loading,
  loaded,
  error,
  loadDispatcher,
}) => {
  if (!loading && !loaded) {
    useEffect(() => {
      loadDispatcher()
    }, [loaded])
    return <div>starting...</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <ErrorView {...error} />
  }
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <Footer />
    </div>
  )
}
