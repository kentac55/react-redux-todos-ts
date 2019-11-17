import { connect } from 'react-redux'
import { toggleTodoAction } from '../actions/todos'
import { TodoListView } from '../components/TodoList'
import { TodoAction, VisibilityFilterKinds, Todo } from '../types'

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
      return todos
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
  dispatch: (arg0: TodoAction) => void
): { toggleTodo: (arg0: number) => void } => ({
  toggleTodo: (id: number): void => dispatch(toggleTodoAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView)
