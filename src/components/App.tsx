import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initOp } from '../actions'
import { Footer } from './Footer'
import { AddTodoContainer } from '../containers/AddTodo'
import { TodoListContainer } from '../containers/TodoList'
import { InitState } from '../reducers/init'

const initSelector = (state: InitState): InitState => state

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const init = useSelector(initSelector)
  if (!init.loaded) {
    console.log('called')
    useEffect(() => {
      console.log('called2')
      dispatch(initOp())
    }, [])
  }
  if (init.loading) {
    return <div>loading...</div>
  }
  if (init.error) {
    return (
      <>
        <div>error</div>
        <pre>{init.error}</pre>
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
