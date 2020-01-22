import React from 'react'
import { Footer } from './Footer'
import { TodoListContainer } from '../containers/TodoList'
import { AddTodoContainer } from '../containers/AddTodo'

export const AppView: React.FC = () => {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <Footer />
    </div>
  )
}
