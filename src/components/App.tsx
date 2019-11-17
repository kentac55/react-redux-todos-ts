import React from 'react'
import { Footer } from './Footer'
import { AddTodo } from '../components/AddTodo'
import { TodoListView } from '../components/TodoList'

export const App: React.FC = () => (
  <div>
    <AddTodo />
    <TodoListView />
    <Footer />
  </div>
)
