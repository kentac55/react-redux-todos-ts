import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoListView } from '../components/TodoList'
import { ToggleAction, VisibilityFilterKinds, Todo } from '../types'

const getVisibleTodos = (
  todos: Todo[],
  filter: VisibilityFilterKinds
): Todo[] => {
  switch (filter) {
    case VisibilityFilterKinds.ALL:
      return todos
    case VisibilityFilterKinds.COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilterKinds.ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      const _e: never = filter
      return _e
  }
}

const mapStateToProps = ({
  todos,
  visibilityFilter,
}: {
  todos: Todo[]
  visibilityFilter: VisibilityFilterKinds
}): { todos: Todo[] } => ({
  todos: getVisibleTodos(todos, visibilityFilter),
})

const mapDispatchToProps = (
  dispatch: (arg0: ToggleAction) => void
): { toggleTodo: (arg0: number) => void } => ({
  toggleTodo: (id: number): void => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView)
