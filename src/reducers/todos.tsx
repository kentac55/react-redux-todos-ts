import { Reducer } from 'redux'
import { Todo, TodoAction } from '../types'

const todos: Reducer<Todo[], TodoAction> = (
  state: Todo[] = [],
  action: TodoAction
): Todo[] => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case 'TOGGLE':
      return state.map(
        (todo: Todo): Todo => {
          return todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        }
      )
    default:
      return state
  }
}

export default todos
