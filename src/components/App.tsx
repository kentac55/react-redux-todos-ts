import React from 'react'
import { Footer } from './Footer'
import { AddTodoContainer } from '../containers/AddTodo'
import { TodoListContainer } from '../containers/TodoList'

export const App: React.FC = () => (
  <div>
    <AddTodoContainer />
    <TodoListContainer />
    <Footer />
  </div>
)
