import React from 'react'
import { TodoView } from './Todo'
import { Todo } from '../types'

type TodoListViewProps = {
  toggleTodoDispatcher: (todo: Todo) => () => void
  todos: Todo[]
}

export const TodoListView: React.FC<TodoListViewProps> = ({
  toggleTodoDispatcher,
  todos,
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoView
          key={todo.id}
          {...todo}
          onClick={toggleTodoDispatcher(todo)}
        />
      ))}
    </ul>
  )
}
