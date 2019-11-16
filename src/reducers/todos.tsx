import { TodoActionType, Todo, TodoAction } from '../types'

const todos = (state: Todo[] = [], action: TodoAction): Todo[] => {
  switch (action.type) {
    case TodoActionType.ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case TodoActionType.TOGGLE:
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
      const _e: never = action.type
      return _e
  }
}

export default todos
