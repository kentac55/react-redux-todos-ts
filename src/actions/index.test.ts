import * as actions from '.'

const todo = { id: 0, text: 'text', completed: false }

it('should create a started action to add a todo', () => {
  expect(actions.addTodo.started({ text: 'text' })).toMatchSnapshot()
})

it('should create a done action to add a todo', () => {
  expect(
    actions.addTodo.done({
      params: { text: 'text' },
      result: {
        type: 'Ok',
        contents: todo,
      },
    })
  ).toMatchSnapshot()
})

it('should create a failed action to add a todo', () => {
  expect(
    actions.addTodo.failed({
      params: { text: 'text' },
      error: Error('Error'),
    })
  ).toMatchSnapshot()
})

it('should create a started action to toggle a todo', () => {
  expect(actions.toggleTodo.started({ todo })).toMatchSnapshot()
})

it('should create a done action to toggle a todo', () => {
  expect(
    actions.toggleTodo.done({
      params: { todo },
      result: {
        type: 'Ok',
        contents: { ...todo, completed: !todo.completed },
      },
    })
  ).toMatchSnapshot()
})

it('should create a failed action to toggle a todo', () => {
  expect(
    actions.toggleTodo.failed({
      params: { todo },
      error: Error('Error'),
    })
  ).toMatchSnapshot()
})

it('should create an action to set SHOW_ALL filter', () => {
  expect(actions.setVisibilityFilter('SHOW_ALL')).toMatchSnapshot()
})

it('should create an action to set SHOW_ACTIVE filter', () => {
  expect(actions.setVisibilityFilter('SHOW_ACTIVE')).toMatchSnapshot()
})

it('should create an action to set SHOW_COMPLETED filter', () => {
  expect(actions.setVisibilityFilter('SHOW_COMPLETED')).toMatchSnapshot()
})

it('should create a started action to get a todo', () => {
  expect(actions.getTodo.started({ id: 0 })).toMatchSnapshot()
})

it('should create a done action to get a todo', () => {
  expect(
    actions.getTodo.done({
      params: { id: 0 },
      result: {
        type: 'Ok',
        contents: todo,
      },
    })
  ).toMatchSnapshot()
})

it('should create a failed action to get a todo', () => {
  expect(
    actions.getTodo.failed({
      params: { id: 0 },
      error: Error('Error'),
    })
  ).toMatchSnapshot()
})

it('should create a started action to get todos', () => {
  expect(actions.getTodos.started()).toMatchSnapshot()
})

it('should create a done action to get todos', () => {
  expect(
    actions.getTodos.done({
      params: undefined,
      result: {
        type: 'Ok',
        contents: [todo],
      },
    })
  ).toMatchSnapshot()
})

it('should create a failed action to get todos', () => {
  expect(
    actions.getTodos.failed({
      params: undefined,
      error: Error('Error'),
    })
  ).toMatchSnapshot()
})

it('should create a started action to init app', () => {
  expect(actions.initApp.started()).toMatchSnapshot()
})

it('should create a done action to init app', () => {
  expect(
    actions.initApp.done({
      params: undefined,
      result: {
        type: 'Ok',
        contents: [todo],
      },
    })
  ).toMatchSnapshot()
})

it('should create a failed action to init app', () => {
  expect(
    actions.initApp.failed({
      params: undefined,
      error: Error('Error'),
    })
  ).toMatchSnapshot()
})
