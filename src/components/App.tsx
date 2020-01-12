import React, { useEffect } from 'react'
import { Footer } from './Footer'
import { TodoListContainer } from '../containers/TodoList'
import { AddTodoContainer } from '../containers/AddTodo'

type AppViewProps = {
  loading: boolean
  loaded: boolean
  error: {
    type: string
    message: string | null
  } | null
  loadDispatcher: () => void
}

export const ErrorView: React.FC<{ type: string; message: string | null }> = ({
  type,
  message,
}) => {
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
