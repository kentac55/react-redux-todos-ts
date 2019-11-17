import React from 'react'
import { TodoView } from './Todo'
import { Todo } from '../types'

type TodoListViewProps = {
  todos: Todo[]
  toggleTodo: (arg0: number) => void
}

export const TodoListView: React.FC<TodoListViewProps> = ({
  todos,
  toggleTodo,
}) => (
  <ul>
    {todos.map(todo => (
      <TodoView
        key={todo.id}
        {...todo}
        onClick={(): void => toggleTodo(todo.id)}
      />
    ))}
  </ul>
)
