import React from 'react'
import { TodoView } from './Todo'
import { Todo } from '../types'

type TodoListViewProps = {
  dispatcher: (todo: Todo) => () => void
  todos: Todo[]
}

export const TodoListView: React.FC<TodoListViewProps> = ({
  dispatcher,
  todos,
}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoView key={todo.id} {...todo} onClick={dispatcher(todo)} />
      ))}
    </ul>
  )
}
