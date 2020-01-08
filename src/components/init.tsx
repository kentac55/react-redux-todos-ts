import React, { useEffect } from 'react'
import { Footer } from './Footer'
import { AddTodoContainer } from '../containers/AddTodo'
import { TodoListContainer } from '../containers/TodoList'

type InitViewProps = {
  loading: boolean
  loaded: boolean
  error: Error | null
  loadDispatcher: () => void
}

export const InitView: React.FC<InitViewProps> = ({
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
    return (
      <>
        <div>error</div>
        <pre>{error.message}</pre>
      </>
    )
  }
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <Footer />
    </div>
  )
}
