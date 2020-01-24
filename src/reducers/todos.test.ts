import { Action } from 'redux'
import { todoReducer, TodoState } from './todos'
import { addTodo, initApp, getTodos, toggleTodo } from '../actions'

const todos = [
  { id: 0, text: 'hoge', completed: false },
  { id: 1, text: 'fuga', completed: true },
  { id: 2, text: 'piyo', completed: false },
]
const id = 4
const text = 'test'
const todo = { id, text, completed: false }

const zeroState = {
  todos: [],
}

const someState = {
  todos,
}

const serverError = { type: 'Internal', message: null } as const

it('should return initial state', () => {
  expect(todoReducer(undefined, { type: undefined })).toEqual(zeroState)
})

it.each<[TodoState, Action, TodoState]>([
  [
    zeroState,
    initApp.done({
      params: undefined,
      result: { type: 'Ok', contents: todos },
    }),
    someState,
  ],
  [
    zeroState,
    initApp.done({ params: undefined, result: serverError }),
    zeroState,
  ],
  [
    someState,
    addTodo.done({
      params: { text },
      result: { type: 'Ok', contents: todo },
    }),
    { todos: [...todos, todo] },
  ],
  [
    someState,
    addTodo.done({ params: { text }, result: serverError }),
    someState,
  ],
  [
    someState,
    toggleTodo.done({
      params: { todo: todos[0] },
      result: {
        type: 'Ok',
        contents: { ...todos[0], completed: !todos[0].completed },
      },
    }),
    {
      todos: [
        { ...todos[0], completed: !todos[0].completed },
        todos[1],
        todos[2],
      ],
    },
  ],
  [
    someState,
    toggleTodo.done({ params: { todo }, result: serverError }),
    someState,
  ],
  [
    zeroState,
    getTodos.done({
      params: undefined,
      result: { type: 'Ok', contents: todos },
    }),
    someState,
  ],
  [
    zeroState,
    getTodos.done({ params: undefined, result: serverError }),
    zeroState,
  ],
])('should handle %s', (initState, action, expectedState) => {
  expect(todoReducer(initState, action)).toStrictEqual(expectedState)
  expect(todoReducer(initState, action)).toMatchSnapshot()
})
